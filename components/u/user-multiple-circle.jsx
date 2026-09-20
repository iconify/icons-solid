import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tk2k528rk.css';
import '../../css/h/hv9o5bd6d.css';
import '../../css/o/ov-rvbc0g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="tk2k528rk"/><path class="hv9o5bd6d"/><path class="ov-rvbc0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:user-multiple-circle"} {...others} />);
}

export default Component;
