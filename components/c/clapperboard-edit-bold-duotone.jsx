import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kmc_heavq.css';
import '../../css/y/yhvy4lkom.css';
import '../../css/p/psvnbab7k.css';
import '../../css/d/dd7-ubcex.css';
import '../../css/s/sgi786blj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kmc_heavq"/><path class="yhvy4lkom"/><path class="psvnbab7k"/><path class="dd7-ubcex"/><path class="sgi786blj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-edit-bold-duotone"} {...others} />);
}

export default Component;
