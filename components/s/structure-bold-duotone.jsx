import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dsotfsaiu.css';
import '../../css/e/e2ra9zmqo.css';
import '../../css/f/fedou6bod.css';
import '../../css/n/n5fjpab4o.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/t/t2yzg7qtj.css';
import '../../css/a/a7fvcojxy.css';
import '../../css/v/vdyfv57dh.css';
import '../../css/r/r2hb2jpyg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dsotfsaiu"/><path class="e2ra9zmqo"/><path class="fedou6bod"/><path class="n5fjpab4o"/><g class="mc2zb0bvp"><path class="t2yzg7qtj"/><path class="a7fvcojxy"/><path class="vdyfv57dh"/><path class="r2hb2jpyg"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:structure-bold-duotone"} {...others} />);
}

export default Component;
