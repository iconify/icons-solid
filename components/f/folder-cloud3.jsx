import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/u/u0oydvb4f.css';
import '../../css/j/j4d23n8lc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="u0oydvb4f"/><path class="j4d23n8lc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:folder-cloud3"} {...others} />);
}

export default Component;
