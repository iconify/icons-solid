import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rnfomkb1n.css';
import '../../css/d/dt0ocrz6j.css';
import '../../css/m/mzih8kb1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="rnfomkb1n"/><path clip-rule="evenodd" class="dt0ocrz6j"/><path class="mzih8kb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:openclaw-moltbot-clawdbot"} {...others} />);
}

export default Component;
