import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h32o8968p.css';
import '../../css/m/mcu8e5c5z.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="h32o8968p"/><path class="mcu8e5c5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:foot-print-duo"} {...others} />);
}

export default Component;
