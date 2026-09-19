import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imc-y6tvu.css';
import '../../css/q/qv6egzw5f.css';
import '../../css/f/friwwhbgo.css';
import '../../css/k/krqewebem.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="imc-y6tvu"/><path class="qv6egzw5f"/><path class="friwwhbgo"/><path class="krqewebem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layer-foward-duo"} {...others} />);
}

export default Component;
