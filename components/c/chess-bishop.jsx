import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ct31yccqe.css';
import '../../css/m/my1excbtc.css';
import '../../css/y/yslcpvuze.css';
import '../../css/f/frdahab5c.css';
import '../../css/f/fbwx5gbcg.css';
import '../../css/d/do83wsjmr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ct31yccqe"/><path class="my1excbtc"/><path class="yslcpvuze"/><path class="frdahab5c"/><path class="fbwx5gbcg"/><path class="do83wsjmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:chess-bishop"} {...others} />);
}

export default Component;
