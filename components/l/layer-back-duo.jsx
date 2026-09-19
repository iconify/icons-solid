import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mhfh227px.css';
import '../../css/a/aer3z1bva.css';
import '../../css/v/vfhi0fapr.css';
import '../../css/k/kqfnxrbrd.css';
import '../../css/o/o0nhrwzxd.css';
import '../../css/g/gu801tbfl.css';
import '../../css/u/ucypoj0pz.css';
import '../../css/h/hw1aglekt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="mhfh227px"/><path class="aer3z1bva"/><path class="vfhi0fapr"/><path class="kqfnxrbrd"/><path class="o0nhrwzxd"/><path class="gu801tbfl"/><path class="ucypoj0pz"/><path class="hw1aglekt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layer-back-duo"} {...others} />);
}

export default Component;
