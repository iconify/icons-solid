import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i793flwcp.css';
import '../../css/m/m5_x9zgtq.css';
import '../../css/k/kaec_pgza.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="i793flwcp"/><path class="m5_x9zgtq"/><path class="kaec_pgza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:house-water-duo"} {...others} />);
}

export default Component;
