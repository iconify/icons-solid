import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p67-f3bar.css';
import '../../css/c/c5nto_b8o.css';
import '../../css/x/xet846fwt.css';
import '../../css/k/kyudq1bdz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p67-f3bar"/><path class="c5nto_b8o"/><path class="xet846fwt"/><path class="kyudq1bdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:traffic-cone"} {...others} />);
}

export default Component;
