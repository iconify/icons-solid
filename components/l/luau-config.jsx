import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s53vmbcgz.css';
import '../../css/p/pqnoonb8e.css';
import '../../css/o/obz7f--ig.css';
import '../../css/g/gu7swvc7j.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="s53vmbcgz"><path class="pqnoonb8e"/><path class="obz7f--ig"/><path class="gu7swvc7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:luau-config"} {...others} />);
}

export default Component;
