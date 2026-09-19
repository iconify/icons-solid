import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/p69-zpbwm.css';
import '../../css/q/qqucfbc0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="p69-zpbwm"/><path class="qqucfbc0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:soup"} {...others} />);
}

export default Component;
