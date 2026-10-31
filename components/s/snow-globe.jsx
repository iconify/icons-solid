import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/ywzudrybg.css';
import '../../css/x/x22s60b5g.css';
import '../../css/k/kgo0s5bve.css';
import '../../css/s/s2j17hbhz.css';
import '../../css/s/sr42w3btw.css';
import '../../css/z/z5qsc6boq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ywzudrybg"/><path class="x22s60b5g"/><path class="kgo0s5bve wm-shine"/><path class="s2j17hbhz wm-k"/><path class="sr42w3btw wm-a"/><path class="wm-deco z5qsc6boq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:snow-globe"} {...others} />);
}

export default Component;
