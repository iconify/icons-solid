import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0qbhmb0w.css';
import '../../css/m/mu90cybeg.css';
import '../../css/w/wyrfambwi.css';
import '../../css/c/cp39r-brl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t0qbhmb0w"/><path class="mu90cybeg"/><rect transform="matrix(0 -1 -1 0 16.5 18.78)" class="wyrfambwi"/><path class="cp39r-brl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sim-card"} {...others} />);
}

export default Component;
