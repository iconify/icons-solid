import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f25o03wps.css';
import '../../css/p/p3z-0bbyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f25o03wps"/><path class="p3z-0bbyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:next-week"} {...others} />);
}

export default Component;
