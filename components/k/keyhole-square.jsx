import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u55m8obaw.css';
import '../../css/q/q132egrad.css';
import '../../css/c/c_m8emxgs.css';
import '../../css/m/mu0ml18bv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u55m8obaw"/><path class="q132egrad"/><path class="c_m8emxgs"/><path class="mu0ml18bv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:keyhole-square"} {...others} />);
}

export default Component;
