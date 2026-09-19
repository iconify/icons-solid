import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zhb0pva1h.css';
import '../../css/z/zbbn00bvs.css';
import '../../css/t/tu918tbrk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zhb0pva1h"/><path class="zbbn00bvs"/><path clip-rule="evenodd" class="tu918tbrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:select-window"} {...others} />);
}

export default Component;
