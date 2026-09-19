import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q0yeiclwc.css';
import '../../css/e/e4p5-xbcp.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="q0yeiclwc"/><path class="e4p5-xbcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:bluetooth-slash"} {...others} />);
}

export default Component;
