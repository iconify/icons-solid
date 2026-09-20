import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zxlg08bmk.css';
import '../../css/f/fxop-obuo.css';
import '../../css/b/bx2746byo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zxlg08bmk"/><path class="fxop-obuo"/><path class="bx2746byo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:eraser-duotone"} {...others} />);
}

export default Component;
