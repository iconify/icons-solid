import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tojdi1wps.css';
import '../../css/i/i4w1lbc8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tojdi1wps"/><path class="i4w1lbc8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-turn-forward"} {...others} />);
}

export default Component;
