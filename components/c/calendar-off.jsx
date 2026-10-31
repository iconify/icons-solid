import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/p0tjnso3b.css';
import '../../css/c/clxcehbcv.css';
import '../../css/b/biv-r_b9a.css';
import '../../css/y/yk993owos.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/i/i1g1qkwrt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="p0tjnso3b"/><path class="clxcehbcv wm-shine"/><path class="biv-r_b9a wm-k"/><path class="wm-a yk993owos"/><path class="qr4ochb5c wm-s"/><path class="i1g1qkwrt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:calendar-off"} {...others} />);
}

export default Component;
