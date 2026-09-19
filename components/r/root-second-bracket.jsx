import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/ddh_1r-5t.css';
import '../../css/l/l46s5-5lc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ddh_1r-5t"/><path class="l46s5-5lc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:root-second-bracket"} {...others} />);
}

export default Component;
