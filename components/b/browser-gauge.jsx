import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vplwyu3il.css';
import '../../css/l/l8fxrac6r.css';
import '../../css/m/m7g_fqbwp.css';
import '../../css/c/chpt85bbl.css';
import '../../css/z/zg-7zwl5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vplwyu3il"/><rect class="l8fxrac6r"/><path class="m7g_fqbwp"/><path class="chpt85bbl"/><path class="zg-7zwl5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:browser-gauge"} {...others} />);
}

export default Component;
