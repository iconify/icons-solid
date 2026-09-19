import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jywzibzfz.css';
import '../../css/f/fw8rx6b9c.css';
import '../../css/c/cuh8gyztp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="jywzibzfz"/><path class="fw8rx6b9c"/><path class="cuh8gyztp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:enter-key"} {...others} />);
}

export default Component;
