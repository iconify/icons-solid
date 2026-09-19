import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rdg8_zbcm.css';
import '../../css/j/j6jh8xbwl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="rdg8_zbcm"/><path class="j6jh8xbwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:landing"} {...others} />);
}

export default Component;
