import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lbwmvmcyq.css';
import '../../css/r/rfmp8lbyd.css';
import '../../css/e/ebgju7ahw.css';
import '../../css/c/cq3h1kldg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lbwmvmcyq"/><rect transform="rotate(75 -4.06 20.32)scale(-1 1)" class="rfmp8lbyd"/><path class="ebgju7ahw"/><path class="cq3h1kldg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dices"} {...others} />);
}

export default Component;
