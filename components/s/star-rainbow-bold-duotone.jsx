import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n-d4sdbbd.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/z/zbymvmznn.css';
import '../../css/h/hngxwmbsq.css';
import '../../css/s/sqj-8c32a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n-d4sdbbd"/><g class="mc2zb0bvp"><path class="zbymvmznn"/><path class="hngxwmbsq"/><path class="sqj-8c32a"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-rainbow-bold-duotone"} {...others} />);
}

export default Component;
