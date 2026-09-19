import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g3_itsblt.css';
import '../../css/t/tdttt-ead.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g3_itsblt"/><path class="tdttt-ead"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:calendar-search"} {...others} />);
}

export default Component;
