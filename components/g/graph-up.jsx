import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q8ytpqbtc.css';
import '../../css/w/wxrvz1bup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q8ytpqbtc"/><path class="wxrvz1bup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:graph-up"} {...others} />);
}

export default Component;
