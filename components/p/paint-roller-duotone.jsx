import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ecpnxtbzc.css';
import '../../css/h/hwxoqsybz.css';
import '../../css/q/qf1cubdaz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ecpnxtbzc"/><path class="hwxoqsybz"/><path class="qf1cubdaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:paint-roller-duotone"} {...others} />);
}

export default Component;
