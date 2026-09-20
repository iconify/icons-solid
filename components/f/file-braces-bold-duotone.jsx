import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dobl-nbbl.css';
import '../../css/d/ddipbdbdu.css';
import '../../css/w/w083gzbra.css';
import '../../css/y/ya_55rppu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dobl-nbbl"/><path class="ddipbdbdu"/><path class="w083gzbra"/><path clip-rule="evenodd" class="ya_55rppu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-braces-bold-duotone"} {...others} />);
}

export default Component;
