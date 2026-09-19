import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q8ytpqbtc.css';
import '../../css/u/udv1nwb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q8ytpqbtc"/><path class="udv1nwb3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:graph-down"} {...others} />);
}

export default Component;
