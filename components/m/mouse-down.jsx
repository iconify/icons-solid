import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9jra-b1x.css';
import '../../css/r/rip13dblj.css';
import '../../css/l/lwby7j4_w.css';
import '../../css/p/pvkwo7fac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k9jra-b1x"/><path class="rip13dblj"/><rect transform="matrix(-1 0 0 1 13.9 5.53)" class="lwby7j4_w"/><path class="pvkwo7fac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mouse-down"} {...others} />);
}

export default Component;
