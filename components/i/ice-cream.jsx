import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nltzyzbxq.css';
import '../../css/p/px77-ls_q.css';
import '../../css/n/nw3lmibih.css';
import '../../css/y/ys26-wbpr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nltzyzbxq"/><path class="px77-ls_q"/><path class="nw3lmibih"/><path class="ys26-wbpr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ice-cream"} {...others} />);
}

export default Component;
