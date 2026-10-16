import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/twnyv4bjv.css';
import '../../css/s/so8hlrbiu.css';
import '../../css/u/ucsz5wbic.css';
import '../../css/i/izvz8pgmj.css';
import '../../css/w/w4n5kcmnw.css';
import '../../css/n/nrjw7gd1z.css';
import '../../css/p/p7o_llxfq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="twnyv4bjv"/><rect transform="matrix(1 0 0 -1 13.45 21.33)" class="so8hlrbiu"/><rect class="ucsz5wbic"/><rect class="izvz8pgmj"/><rect transform="matrix(1 0 0 -1 13.45 21.33)" class="w4n5kcmnw"/><rect class="nrjw7gd1z"/><path class="p7o_llxfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:layout-minus"} {...others} />);
}

export default Component;
