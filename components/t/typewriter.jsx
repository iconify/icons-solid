import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y0fq2mb0a.css';
import '../../css/z/zik3pnuln.css';
import '../../css/g/gu7-ijm_q.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="y0fq2mb0a"/><path class="zik3pnuln"/><path class="gu7-ijm_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:typewriter"} {...others} />);
}

export default Component;
