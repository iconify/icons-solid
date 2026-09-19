import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hwdzisbtb.css';
import '../../css/y/yk0p5wm_s.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="hwdzisbtb"/><path class="yk0p5wm_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:database"} {...others} />);
}

export default Component;
