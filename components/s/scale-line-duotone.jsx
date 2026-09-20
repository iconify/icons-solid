import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jjq2qh_fp.css';
import '../../css/h/hwifnpb2v.css';
import '../../css/j/jaylt9jhp.css';
import '../../css/q/quzsnqbup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jjq2qh_fp"/><path class="hwifnpb2v"/><path class="jaylt9jhp"/><path class="quzsnqbup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scale-line-duotone"} {...others} />);
}

export default Component;
