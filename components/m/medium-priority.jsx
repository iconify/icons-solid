import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkky_yb9z.css';
import '../../css/b/bvkc79bpm.css';
import '../../css/b/bwdpl5zyw.css';
import '../../css/m/mdaedzcsu.css';
import '../../css/p/p0vj0xbgc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dkky_yb9z"/><g class="bvkc79bpm"><circle class="bwdpl5zyw"/><circle class="mdaedzcsu"/><circle class="p0vj0xbgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:medium-priority"} {...others} />);
}

export default Component;
