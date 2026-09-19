import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d_tn6fb3u.css';
import '../../css/y/y73-0yb2m.css';
import '../../css/x/xxezozbbw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="d_tn6fb3u"/><path clip-rule="evenodd" class="y73-0yb2m"/><path class="xxezozbbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:integrated-data-and-research"} {...others} />);
}

export default Component;
