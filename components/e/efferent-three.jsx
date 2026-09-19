import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/ybut5hbil.css';
import '../../css/n/njq819f5t.css';
import '../../css/q/q63ecculx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ybut5hbil"/><path class="njq819f5t"/><path class="q63ecculx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:efferent-three"} {...others} />);
}

export default Component;
