import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nbxd0cigc.css';
import '../../css/h/hwbtc3bpr.css';
import '../../css/v/vxey7ibys.css';
import '../../css/u/umzkv9zji.css';
import '../../css/p/pkqaggb0i.css';
import '../../css/g/gjn9iyg8t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nbxd0cigc"/><ellipse transform="rotate(90 14.29 6)" class="hwbtc3bpr"/><path class="vxey7ibys"/><rect class="umzkv9zji"/><path class="pkqaggb0i"/><rect class="gjn9iyg8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-receiving-coin"} {...others} />);
}

export default Component;
