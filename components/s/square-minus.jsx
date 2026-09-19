import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/u/u4sxwwy9k.css';
import '../../css/x/xzmgj0blt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="u4sxwwy9k"/><path class="xzmgj0blt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-minus"} {...others} />);
}

export default Component;
