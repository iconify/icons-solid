import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pyln21b0z.css';
import '../../css/p/pzrn709fu.css';
import '../../css/w/wruw12bjk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pyln21b0z"/><path class="pzrn709fu"/><path clip-rule="evenodd" class="wruw12bjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:diabetes-measure-outline"} {...others} />);
}

export default Component;
