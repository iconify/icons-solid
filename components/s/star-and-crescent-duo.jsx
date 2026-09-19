import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9ii-ei4d.css';
import '../../css/z/zjbcw_sez.css';
import '../../css/d/dwxkob-qm.css';
import '../../css/x/x_xxc0bcy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="z9ii-ei4d"/><path class="zjbcw_sez"/><path class="dwxkob-qm"/><path class="x_xxc0bcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:star-and-crescent-duo"} {...others} />);
}

export default Component;
