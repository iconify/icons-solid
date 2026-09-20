import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/g/gc_7g0etu.css';
import '../../css/p/pm3acfw_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="gc_7g0etu"/><path class="pm3acfw_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cloud-fog"} {...others} />);
}

export default Component;
