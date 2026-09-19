import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/upd33_b0a.css';
import '../../css/l/lc63-lb6y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="upd33_b0a"/><path class="lc63-lb6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:corner-left-up"} {...others} />);
}

export default Component;
