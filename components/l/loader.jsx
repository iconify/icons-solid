import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qa-0fibzt.css';
import '../../css/e/ey65q7bnk.css';
import '../../css/k/k1p42wb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qa-0fibzt wm-k"/><path class="ey65q7bnk wm-a"/><path class="k1p42wb5t wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:loader"} {...others} />);
}

export default Component;
