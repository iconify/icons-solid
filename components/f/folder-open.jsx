import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/j6n739btm.css';
import '../../css/d/davxvp7uv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="j6n739btm"/><path class="davxvp7uv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:folder-open"} {...others} />);
}

export default Component;
