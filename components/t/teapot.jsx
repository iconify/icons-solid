import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/uwbdedcpb.css';
import '../../css/z/z7q2ob2wl.css';
import '../../css/q/q27f-lbdg.css';
import '../../css/v/vyzvnwbfi.css';
import '../../css/l/l5kgxeqcc.css';
import '../../css/g/gb9u7-b5g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="uwbdedcpb"/><path class="z7q2ob2wl"/><path class="q27f-lbdg"/><path class="vyzvnwbfi"/><path class="l5kgxeqcc"/><path class="gb9u7-b5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:teapot"} {...others} />);
}

export default Component;
