import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zxd_9ybuk.css';
import '../../css/v/vkw2dhfhc.css';
import '../../css/m/mca097_7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zxd_9ybuk"/><path class="vkw2dhfhc"/><path class="mca097_7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mobile-programming-filled"} {...others} />);
}

export default Component;
