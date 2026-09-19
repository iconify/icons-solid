import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c2tjk3byg.css';
import '../../css/d/dnq_wl45m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c2tjk3byg"/><path class="dnq_wl45m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-template"} {...others} />);
}

export default Component;
