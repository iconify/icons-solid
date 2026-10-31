import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ecl9mibod.css';
import '../../css/w/wf3tj5bss.css';
import '../../css/e/eql9fgb5r.css';
import '../../css/u/urjm7cbaj.css';
import '../../css/z/zus36ubwg.css';
import '../../css/y/yf4rkkbgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ecl9mibod wm-shadow"/><path class="wf3tj5bss"/><path class="eql9fgb5r"/><path class="urjm7cbaj"/><path class="zus36ubwg"/><path class="yf4rkkbgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:shield-x"} {...others} />);
}

export default Component;
