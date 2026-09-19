import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tmyzhlx6d.css';
import '../../css/n/n7te-rcpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="tmyzhlx6d"/><path class="n7te-rcpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:alien-01"} {...others} />);
}

export default Component;
