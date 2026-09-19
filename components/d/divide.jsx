import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l8x6qzuvy.css';
import '../../css/e/enescgqqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l8x6qzuvy"/><path class="enescgqqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:divide"} {...others} />);
}

export default Component;
