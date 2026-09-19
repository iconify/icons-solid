import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vrc15wbok.css';
import '../../css/d/dw6mr4b-d.css';
import '../../css/o/ov04m3g9d.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vrc15wbok"/><path class="dw6mr4b-d"/><path class="ov04m3g9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:garage-duo"} {...others} />);
}

export default Component;
