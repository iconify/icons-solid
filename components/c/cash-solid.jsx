import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hzf0e9b9a.css';
import '../../css/k/k4ii4twhf.css';
import '../../css/m/mew4ry_wk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hzf0e9b9a"/><path clip-rule="evenodd" class="k4ii4twhf"/><path class="mew4ry_wk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:cash-solid"} {...others} />);
}

export default Component;
