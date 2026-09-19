import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/v3v0ln4og.css';
import '../../css/h/h84xghb3s.css';
import '../../css/u/u5e3l5bit.css';
import '../../css/n/nzolxssuq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="v3v0ln4og"/><path class="h84xghb3s"/><path class="u5e3l5bit"/><path class="nzolxssuq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cube-two"} {...others} />);
}

export default Component;
