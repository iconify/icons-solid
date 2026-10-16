import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uvhdzxb8g.css';
import '../../css/t/t0ziotbzt.css';
import '../../css/t/tzr9dnbwb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="uvhdzxb8g"/><rect class="t0ziotbzt"/><path class="tzr9dnbwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:video-filled"} {...others} />);
}

export default Component;
