import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/r/rlbmq77gc.css';
import '../../css/p/p-67x_y3b.css';
import '../../css/r/rd3vi7oyg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="rlbmq77gc"/><path class="p-67x_y3b"/><path class="rd3vi7oyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:mascara"} {...others} />);
}

export default Component;
