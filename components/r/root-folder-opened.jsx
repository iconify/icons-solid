import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jlijy7b6j.css';
import '../../css/p/pqys9m2th.css';
import '../../css/m/mfynv6ahr.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="jlijy7b6j"/><path class="pqys9m2th"/><path clip-rule="evenodd" class="mfynv6ahr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:root-folder-opened"} {...others} />);
}

export default Component;
