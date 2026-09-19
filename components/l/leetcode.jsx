import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xi1riwksk.css';
import '../../css/d/dhmtdsb-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xi1riwksk"/><path class="dhmtdsb-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:leetcode"} {...others} />);
}

export default Component;
