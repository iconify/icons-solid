import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yizjjzobk.css';
import '../../css/f/fl0jtybdb.css';
import '../../css/m/mh_q3pbjg.css';
import '../../css/u/uuuzw-biv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><circle class="yizjjzobk"/><path class="fl0jtybdb"/><path class="mh_q3pbjg"/><path class="uuuzw-biv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:boy"} {...others} />);
}

export default Component;
