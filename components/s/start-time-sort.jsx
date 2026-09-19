import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/m/m4o192bds.css';
import '../../css/h/hm6a7abbr.css';
import '../../css/r/rh1n6jbub.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="m4o192bds"/><path class="hm6a7abbr"/><path class="rh1n6jbub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:start-time-sort"} {...others} />);
}

export default Component;
