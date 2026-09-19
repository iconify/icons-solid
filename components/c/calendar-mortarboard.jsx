import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t0ei0haup.css';
import '../../css/o/o2ec1zj_v.css';
import '../../css/u/uqvdeh28u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t0ei0haup"/><path class="o2ec1zj_v"/><path class="uqvdeh28u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:calendar-mortarboard"} {...others} />);
}

export default Component;
