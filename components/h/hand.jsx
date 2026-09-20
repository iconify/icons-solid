import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asu8thb_w.css';
import '../../css/y/yzgrvsbgm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="asu8thb_w"/><path class="yzgrvsbgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:hand"} {...others} />);
}

export default Component;
