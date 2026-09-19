import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sqp_44b0p.css';
import '../../css/y/y7zppqbne.css';
import '../../css/s/srj0fzbwg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sqp_44b0p"/><path class="y7zppqbne"/><path class="srj0fzbwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-square"} {...others} />);
}

export default Component;
