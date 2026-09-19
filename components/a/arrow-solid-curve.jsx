import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gqcufpb0p.css';
import '../../css/t/tmkk-ebcz.css';
import '../../css/d/dijsgdc7v.css';
import '../../css/m/mpzv_9bmn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gqcufpb0p"/><path class="tmkk-ebcz"/><path class="dijsgdc7v"/><path class="mpzv_9bmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:arrow-solid-curve"} {...others} />);
}

export default Component;
