import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qaiv0sbkl.css';
import '../../css/t/tvzvrubjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qaiv0sbkl"/><path class="tvzvrubjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:dashboard-dots"} {...others} />);
}

export default Component;
