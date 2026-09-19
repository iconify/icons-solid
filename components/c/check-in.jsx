import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/pf0x76bar.css';
import '../../css/h/hb2a8jbpb.css';
import '../../css/d/d8xgs9k4y.css';
import '../../css/m/mdmh3_bpt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="pf0x76bar"/><path class="hb2a8jbpb"/><path class="d8xgs9k4y"/><path class="mdmh3_bpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:check-in"} {...others} />);
}

export default Component;
