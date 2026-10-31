import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yd_grxk2v.css';
import '../../css/q/qxttxwbsj.css';
import '../../css/x/x7oi16bmk.css';
import '../../css/c/ctw2e-brp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="yd_grxk2v"/><path class="qxttxwbsj wm-shine"/><path class="wm-k x7oi16bmk"/><path class="ctw2e-brp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:bandage"} {...others} />);
}

export default Component;
