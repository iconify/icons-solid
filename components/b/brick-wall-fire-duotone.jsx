import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yheb48nef.css';
import '../../css/n/noicztbcn.css';
import '../../css/p/puy-xje_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yheb48nef"/><path class="noicztbcn"/><path class="puy-xje_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:brick-wall-fire-duotone"} {...others} />);
}

export default Component;
