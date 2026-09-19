import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/j-8rs0syu.css';
import '../../css/k/ktk4-jb_u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="j-8rs0syu"/><path class="ktk4-jb_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:power"} {...others} />);
}

export default Component;
