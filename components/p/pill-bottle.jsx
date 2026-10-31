import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qv2q0o08r.css';
import '../../css/o/ogy45tv6s.css';
import '../../css/m/mqtc_cbqa.css';
import '../../css/j/jgka1gbzk.css';
import '../../css/c/clvf63btf.css';
import '../../css/h/huzbi27zy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qv2q0o08r"/><path class="ogy45tv6s"/><path class="mqtc_cbqa wm-shine"/><path class="jgka1gbzk wm-k"/><path class="clvf63btf wm-a"/><path class="huzbi27zy wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:pill-bottle"} {...others} />);
}

export default Component;
