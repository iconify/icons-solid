import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hg08p_bww.css';
import '../../css/j/jbndsj30l.css';
import '../../css/c/cn5pr93mu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hg08p_bww"/><path class="jbndsj30l"/><path class="cn5pr93mu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-rotate"} {...others} />);
}

export default Component;
