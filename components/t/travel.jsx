import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z08vmqjdw.css';
import '../../css/j/j0681-bpi.css';
import '../../css/e/eue9lwbzb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="z08vmqjdw"/><path clip-rule="evenodd" class="j0681-bpi"/><path class="eue9lwbzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:travel"} {...others} />);
}

export default Component;
