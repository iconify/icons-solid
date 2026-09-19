import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wz_rvjbnd.css';
import '../../css/l/l2v0olasg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="wz_rvjbnd"/><path class="l2v0olasg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:arrow-right-down"} {...others} />);
}

export default Component;
