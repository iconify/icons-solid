import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zoq68sbbm.css';
import '../../css/f/far0_obfx.css';
import '../../css/p/p01z8bgne.css';
import '../../css/k/ktsg6rbdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zoq68sbbm"/><path class="far0_obfx"/><path class="p01z8bgne"/><path class="ktsg6rbdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:keyboard-numeric"} {...others} />);
}

export default Component;
