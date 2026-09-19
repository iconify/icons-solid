import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a12819bpr.css';
import '../../css/l/l-3t-xbgl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a12819bpr"/><path class="l-3t-xbgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:cpu-warning"} {...others} />);
}

export default Component;
