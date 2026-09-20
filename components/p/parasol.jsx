import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mbl6qlheu.css';
import '../../css/k/kfu4t0b8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mbl6qlheu"/><path clip-rule="evenodd" class="kfu4t0b8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:parasol"} {...others} />);
}

export default Component;
