import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/is34wybgi.css';
import '../../css/w/wjvt9sb8g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="is34wybgi"/><path class="wjvt9sb8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:clothes-hoodie"} {...others} />);
}

export default Component;
