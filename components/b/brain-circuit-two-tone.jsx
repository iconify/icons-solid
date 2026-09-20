import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d_pslabds.css';
import '../../css/t/thnklwbpk.css';
import '../../css/e/ei48vjbzf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d_pslabds"/><path class="thnklwbpk"/><path class="ei48vjbzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:brain-circuit-two-tone"} {...others} />);
}

export default Component;
