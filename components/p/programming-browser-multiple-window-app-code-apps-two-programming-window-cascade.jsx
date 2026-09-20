import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e1ho-ybli.css';
import '../../css/g/gndeg6jzc.css';
import '../../css/g/g5n0smnba.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="e1ho-ybli"/><rect class="gndeg6jzc"/><path class="g5n0smnba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:programming-browser-multiple-window-app-code-apps-two-programming-window-cascade"} {...others} />);
}

export default Component;
