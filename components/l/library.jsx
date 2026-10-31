import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/e090zebhe.css';
import '../../css/y/yyvmm6cxs.css';
import '../../css/i/iagn37brf.css';
import '../../css/i/ik857bg1p.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="e090zebhe"/><path class="wm-shine yyvmm6cxs"/><path class="iagn37brf wm-k"/><path class="ik857bg1p wm-a"/><path class="i49wp7b0m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:library"} {...others} />);
}

export default Component;
