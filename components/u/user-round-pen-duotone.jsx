import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gcnkj8yzk.css';
import '../../css/u/u50bmlwji.css';
import '../../css/s/sf7yaz6nn.css';
import '../../css/o/okalx_bvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gcnkj8yzk"/><path class="u50bmlwji"/><path class="sf7yaz6nn"/><path class="okalx_bvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-round-pen-duotone"} {...others} />);
}

export default Component;
