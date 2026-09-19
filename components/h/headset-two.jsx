import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jcs8q1beu.css';
import '../../css/u/uhmo5hb6x.css';
import '../../css/l/lxqcwwbex.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="jcs8q1beu"/><path class="uhmo5hb6x"/><path class="lxqcwwbex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:headset-two"} {...others} />);
}

export default Component;
