import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijlxw4awb.css';
import '../../css/w/wru1txnso.css';
import '../../css/z/za3b9rblf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ijlxw4awb"/><path class="wru1txnso"/><path class="za3b9rblf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:textlint"} {...others} />);
}

export default Component;
