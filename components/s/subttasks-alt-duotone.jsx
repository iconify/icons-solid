import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/t/t9ubtpbyo.css';
import '../../css/q/q1-p5obhk.css';
import '../../css/q/q90b_qbjv.css';
import '../../css/j/j9zbk3bom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><rect transform="rotate(90 16 9)" class="t9ubtpbyo"/><rect transform="rotate(90 20 17)" class="q1-p5obhk"/><path class="q90b_qbjv"/><path class="j9zbk3bom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:subttasks-alt-duotone"} {...others} />);
}

export default Component;
