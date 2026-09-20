import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/k/km89zu55w.css';
import '../../css/y/yok_vw5pk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="km89zu55w"/><path class="yok_vw5pk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:import5"} {...others} />);
}

export default Component;
