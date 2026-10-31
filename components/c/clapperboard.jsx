import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kic6nwodg.css';
import '../../css/p/pppnfcb8p.css';
import '../../css/h/hnkrq5b7j.css';
import '../../css/h/hyzkk6jce.css';
import '../../css/e/etc0r5bem.css';
import '../../css/y/yc9yiab5o.css';
import '../../css/h/hfms6qb-a.css';
import '../../css/s/s-ci5ccof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="kic6nwodg"/><path class="pppnfcb8p"/><path class="hnkrq5b7j wm-shine"/><path class="hyzkk6jce wm-k"/><path class="etc0r5bem wm-a"/><path class="yc9yiab5o"/><path class="hfms6qb-a"/><path class="s-ci5ccof wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:clapperboard"} {...others} />);
}

export default Component;
