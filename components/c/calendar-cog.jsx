import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a6s7kwbyx.css';
import '../../css/k/kss69uqkx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a6s7kwbyx"/><path class="kss69uqkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:calendar-cog"} {...others} />);
}

export default Component;
