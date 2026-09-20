import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctpwnv3dw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ctpwnv3dw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:move-last-rtl"} {...others} />);
}

export default Component;
