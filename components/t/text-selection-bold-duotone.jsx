import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qy1qkdboe.css';
import '../../css/r/rwmk77rov.css';
import '../../css/r/r4kgyybua.css';
import '../../css/m/m89e9jfok.css';
import '../../css/n/nq8gb-buz.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/u/uf5zlrpgw.css';
import '../../css/r/r1gavlbdj.css';
import '../../css/y/y3y3lz79e.css';
import '../../css/s/symx9vbiz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qy1qkdboe"/><path class="rwmk77rov"/><path class="r4kgyybua"/><path class="m89e9jfok"/><path class="nq8gb-buz"/><g class="mc2zb0bvp"><path class="uf5zlrpgw"/><path class="r1gavlbdj"/><path class="y3y3lz79e"/><path class="symx9vbiz"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-selection-bold-duotone"} {...others} />);
}

export default Component;
