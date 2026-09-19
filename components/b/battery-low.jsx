import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/moav62bxj.css';
import '../../css/t/tpekyrbnk.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="moav62bxj"/><path class="tpekyrbnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:battery-low"} {...others} />);
}

export default Component;
