import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/d/dpa_uv29p.css';
import '../../css/w/wumg2q6qg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="dpa_uv29p"/><path class="wumg2q6qg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:messages4"} {...others} />);
}

export default Component;
