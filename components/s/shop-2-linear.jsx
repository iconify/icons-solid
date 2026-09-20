import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/czeiw6b4w.css';
import '../../css/r/rjhfn4lny.css';
import '../../css/n/neb8scc3i.css';
import '../../css/e/eq-y86bpl.css';
import '../../css/s/srni6655m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="czeiw6b4w"/><path class="rjhfn4lny"/><path class="neb8scc3i"/><path class="eq-y86bpl"/><path class="srni6655m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shop-2-linear"} {...others} />);
}

export default Component;
