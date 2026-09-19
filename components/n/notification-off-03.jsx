import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/od7683zig.css';
import '../../css/o/o12cd2bbi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="od7683zig"/><path class="o12cd2bbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:notification-off-03"} {...others} />);
}

export default Component;
