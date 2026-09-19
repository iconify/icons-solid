import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jfo4qb5dg.css';
import '../../css/q/qzval9buy.css';
import '../../css/j/j--hi9baf.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="jfo4qb5dg"/><path class="qzval9buy"/><path class="j--hi9baf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ci-4x3"} {...others} />);
}

export default Component;
