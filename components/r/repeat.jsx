import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i488f6o2g.css';
import '../../css/k/knjstqbkt.css';
import '../../css/b/bl5f_wbko.css';
import '../../css/k/km3ru3bse.css';
import '../../css/e/euo9a_byv.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i488f6o2g"/><path class="knjstqbkt"/><path class="bl5f_wbko"/><path class="km3ru3bse"/><path class="euo9a_byv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:repeat"} {...others} />);
}

export default Component;
