import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zefpa7icl.css';
import '../../css/a/ahjnos-qj.css';
import '../../css/d/djzed1b0f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="zefpa7icl"/><path clip-rule="evenodd" class="ahjnos-qj"/><path clip-rule="evenodd" class="djzed1b0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:health-worker-form2x-outline"} {...others} />);
}

export default Component;
