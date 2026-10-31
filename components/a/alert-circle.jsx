import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/x/xpyn64mhu.css';
import '../../css/w/w5p-a9bfa.css';
import '../../css/z/zhdbguf6e.css';
import '../../css/r/rze47ib2l.css';
import '../../css/e/eo1h8kb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="xpyn64mhu"/><path class="w5p-a9bfa"/><path class="zhdbguf6e"/><path class="rze47ib2l"/><path class="eo1h8kb5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:alert-circle"} {...others} />);
}

export default Component;
