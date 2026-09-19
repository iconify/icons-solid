import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vbnv1kbxq.css';
import '../../css/d/dgtoqqfwz.css';
import '../../css/r/rwolggbaa.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="vbnv1kbxq"/><path class="dgtoqqfwz"/><path class="rwolggbaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:x-ray"} {...others} />);
}

export default Component;
