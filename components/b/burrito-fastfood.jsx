import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lln26-brl.css';
import '../../css/g/gfre7xbjr.css';
import '../../css/k/ky2t-if_e.css';
import '../../css/y/yfscdzbot.css';
import '../../css/o/o9v41k05j.css';
import '../../css/t/tns72ablg.css';
import '../../css/r/rf14u0b8z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lln26-brl"/><path class="gfre7xbjr"/><path class="ky2t-if_e"/><path class="yfscdzbot"/><path class="o9v41k05j"/><path class="tns72ablg"/><path class="rf14u0b8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:burrito-fastfood"} {...others} />);
}

export default Component;
