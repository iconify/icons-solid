import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r3nuceysm.css';
import '../../css/n/na_e5mbnk.css';
import '../../css/p/poz5v4vlw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r3nuceysm"/><path class="na_e5mbnk"/><path clip-rule="evenodd" class="poz5v4vlw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:vomiting2x-outline"} {...others} />);
}

export default Component;
