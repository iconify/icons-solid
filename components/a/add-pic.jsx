import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ol1qgland.css';
import '../../css/k/k0rioybmz.css';
import '../../css/k/ktabidctm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ol1qgland"><path class="k0rioybmz"/><path class="ktabidctm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:add-pic"} {...others} />);
}

export default Component;
