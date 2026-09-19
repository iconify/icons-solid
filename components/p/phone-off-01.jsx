import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yxv261b5j.css';
import '../../css/o/os0z8-lwn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yxv261b5j"/><path class="os0z8-lwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:phone-off-01"} {...others} />);
}

export default Component;
