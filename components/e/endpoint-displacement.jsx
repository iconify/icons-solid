import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vxc1racis.css';
import '../../css/n/nilelnbhx.css';
import '../../css/v/v1gf0mbba.css';
import '../../css/u/umm845b2s.css';
import '../../css/m/mxowaebhs.css';
import '../../css/q/qpih_-b0i.css';
import '../../css/k/k4k3yv8fc.css';
import '../../css/y/y27iitbsr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vxc1racis"/><path class="nilelnbhx"/><path class="v1gf0mbba"/><path class="umm845b2s"/><path class="mxowaebhs"/><path class="qpih_-b0i"/><path class="k4k3yv8fc"/><path class="y27iitbsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:endpoint-displacement"} {...others} />);
}

export default Component;
