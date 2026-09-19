import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j7m1pd7ds.css';
import '../../css/y/yrp63i6vs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j7m1pd7ds"/><path class="yrp63i6vs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:grape"} {...others} />);
}

export default Component;
