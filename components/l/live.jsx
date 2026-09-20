import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvtnscbtx.css';
import '../../css/y/yzo5plbsh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vvtnscbtx"/><circle class="yzo5plbsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:live"} {...others} />);
}

export default Component;
