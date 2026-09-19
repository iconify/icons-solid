import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/npljkgdue.css';
import '../../css/j/j5htyubja.css';
import '../../css/o/oem2-9olf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="npljkgdue"/><path class="j5htyubja"/><path class="oem2-9olf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:belt"} {...others} />);
}

export default Component;
