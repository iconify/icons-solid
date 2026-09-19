import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/id-9qdfhy.css';
import '../../css/d/d3qtm7bgs.css';
import '../../css/g/g9_u062ja.css';
import '../../css/g/gpx9lwbkr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="id-9qdfhy"/><path class="d3qtm7bgs"/><path class="g9_u062ja"/><path class="gpx9lwbkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:heavy-wind"} {...others} />);
}

export default Component;
