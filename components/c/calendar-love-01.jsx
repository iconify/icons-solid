import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vgosehbak.css';
import '../../css/h/h26ylurvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vgosehbak"/><path class="h26ylurvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:calendar-love-01"} {...others} />);
}

export default Component;
