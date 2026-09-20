import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/a/a4wnmw-xx.css';
import '../../css/a/a8csp9bhw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="a4wnmw-xx"/><path class="a8csp9bhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:buildings5"} {...others} />);
}

export default Component;
