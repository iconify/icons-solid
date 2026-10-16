import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bfkn_4b6h.css';
import '../../css/m/mu4wpeqdb.css';
import '../../css/l/li_if2vdt.css';
import '../../css/f/fxywgc1jr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bfkn_4b6h"/><path class="mu4wpeqdb"/><path class="li_if2vdt"/><path class="fxywgc1jr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:face-sad-cry"} {...others} />);
}

export default Component;
