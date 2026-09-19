import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/loml9rw7n.css';
import '../../css/y/yfausol3d.css';
import '../../css/b/bk7s47aiv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="loml9rw7n"/><path class="yfausol3d"/><path class="bk7s47aiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:calendar-clock"} {...others} />);
}

export default Component;
