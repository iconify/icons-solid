import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrnv0amgf.css';
import '../../css/f/fl2qcob-p.css';
import '../../css/d/dt0ocrz6j.css';
import '../../css/m/mzih8kb1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="qrnv0amgf"><path class="fl2qcob-p"/><path clip-rule="evenodd" class="dt0ocrz6j"/><path class="mzih8kb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:openclaw-moltbot-clawdbot"} {...others} />);
}

export default Component;
