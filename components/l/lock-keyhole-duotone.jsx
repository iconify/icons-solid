import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmm42bchc.css';
import '../../css/w/w-olv5bzw.css';
import '../../css/e/esf9wtdqe.css';
import '../../css/p/pw6-rqbfc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qmm42bchc"/><path class="w-olv5bzw"/><path class="esf9wtdqe"/><path class="pw6-rqbfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:lock-keyhole-duotone"} {...others} />);
}

export default Component;
