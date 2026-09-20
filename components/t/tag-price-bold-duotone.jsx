import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kudsvco-f.css';
import '../../css/x/xy363lbwj.css';
import '../../css/m/m56xxd2ev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kudsvco-f"/><path class="xy363lbwj"/><path class="m56xxd2ev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tag-price-bold-duotone"} {...others} />);
}

export default Component;
