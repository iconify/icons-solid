import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/ccoks1myo.css';
import '../../css/d/d9bw24w9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ccoks1myo"/><path class="d9bw24w9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:alt-arrow-down-line-duotone"} {...others} />);
}

export default Component;
