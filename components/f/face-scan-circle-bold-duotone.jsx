import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hkcl8zbkk.css';
import '../../css/f/fd7bfhbpn.css';
import '../../css/c/cw0twbb-k.css';
import '../../css/q/qflij0ceu.css';
import '../../css/u/u1su0w0kf.css';
import '../../css/h/h6mkt6bbf.css';
import '../../css/y/y1f7mlsom.css';
import '../../css/z/zx0i8wxij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hkcl8zbkk"/><path class="fd7bfhbpn"/><path class="cw0twbb-k"/><path class="qflij0ceu"/><path class="u1su0w0kf"/><path class="h6mkt6bbf"/><path class="y1f7mlsom"/><path class="zx0i8wxij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:face-scan-circle-bold-duotone"} {...others} />);
}

export default Component;
