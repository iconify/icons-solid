import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc6w1jbja.css';
import '../../css/k/k0512fcyc.css';
import '../../css/m/m1enbabxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mc6w1jbja"/><path class="k0512fcyc"/><path class="m1enbabxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:command-bold"} {...others} />);
}

export default Component;
