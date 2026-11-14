import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lqzqcbbfi.css';
import '../../css/q/qom7skb0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lqzqcbbfi"/><path class="qom7skb0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-view"} {...others} />);
}

export default Component;
