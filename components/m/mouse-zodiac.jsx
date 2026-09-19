import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yrww9lbbg.css';
import '../../css/a/a1tv8nw3d.css';
import '../../css/i/ihtmtwbcq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="yrww9lbbg"/><path class="a1tv8nw3d"/><path class="ihtmtwbcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mouse-zodiac"} {...others} />);
}

export default Component;
