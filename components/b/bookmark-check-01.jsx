import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dmhppkbej.css';
import '../../css/l/l4c0j82eg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dmhppkbej"/><path class="l4c0j82eg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bookmark-check-01"} {...others} />);
}

export default Component;
