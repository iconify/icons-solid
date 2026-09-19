import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/yb5ocvxyk.css';
import '../../css/p/pq356ln7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="yb5ocvxyk"/><path class="pq356ln7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:moon-cloud"} {...others} />);
}

export default Component;
