import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8vt3rbpd.css';
import '../../css/w/w5h87ub2h.css';
import '../../css/r/rtuut-30x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u8vt3rbpd"/><rect transform="matrix(0 -1 -1 0 22.49 20.27)" class="w5h87ub2h"/><path class="rtuut-30x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-to-video"} {...others} />);
}

export default Component;
