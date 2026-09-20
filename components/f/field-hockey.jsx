import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5wpiebts.css';
import '../../css/h/hp6kgdb8g.css';
import '../../css/f/fu0mhq30y.css';
import '../../css/b/boy9x7b1i.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/h/hrbf4hbct.css';
import '../../css/j/ju8gylkpn.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="l5wpiebts"/><path class="hp6kgdb8g"/><circle class="fu0mhq30y"/><path class="boy9x7b1i"/><g class="ij2x_72vy"><circle class="hrbf4hbct"/><path class="ju8gylkpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:field-hockey"} {...others} />);
}

export default Component;
