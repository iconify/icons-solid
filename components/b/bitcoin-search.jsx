import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/h8w7ikqqs.css';
import '../../css/s/s8bhpdt9z.css';
import '../../css/t/tqxj2bl_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="h8w7ikqqs"/><path class="s8bhpdt9z"/><path class="tqxj2bl_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-search"} {...others} />);
}

export default Component;
