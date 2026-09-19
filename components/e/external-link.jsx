import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qg_6aob3t.css';
import '../../css/v/vl4tdxbnj.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="qg_6aob3t"/><path class="vl4tdxbnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:external-link"} {...others} />);
}

export default Component;
