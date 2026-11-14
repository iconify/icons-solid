import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oe0dezbyt.css';
import '../../css/a/a1fp7_bvg.css';
import '../../css/z/zb3_-p_9w.css';
import '../../css/w/wca0gqejr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oe0dezbyt"/><rect class="a1fp7_bvg"/><rect class="zb3_-p_9w"/><path class="wca0gqejr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:wallbox"} {...others} />);
}

export default Component;
