import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfid1t0-e.css';
import '../../css/c/cxfb3iaop.css';
import '../../css/z/ziu6tk1fq.css';
import '../../css/y/yomdcfegp.css';
import '../../css/i/i551_xj1a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zfid1t0-e"/><path class="cxfb3iaop"/><path class="ziu6tk1fq"/><path class="yomdcfegp"/><path class="i551_xj1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-headphones"} {...others} />);
}

export default Component;
