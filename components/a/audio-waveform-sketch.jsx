import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sk_p_k_hw.css';
import '../../css/e/e6t6s6b9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sk_p_k_hw"/><path class="e6t6s6b9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:audio-waveform-sketch"} {...others} />);
}

export default Component;
