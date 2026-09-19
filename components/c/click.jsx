import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ib0nxrb3q.css';
import '../../css/s/s5736ivez.css';
import '../../css/e/e7i4o6bqk.css';
import '../../css/i/i059y9b8o.css';
import '../../css/i/ixt_ubb8z.css';
import '../../css/g/g0bknwb0s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ib0nxrb3q"/><path clip-rule="evenodd" class="s5736ivez"/><path class="e7i4o6bqk"/><path class="i059y9b8o"/><path class="ixt_ubb8z"/><path class="g0bknwb0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:click"} {...others} />);
}

export default Component;
