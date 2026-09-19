import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/sq0uj5bje.css';
import '../../css/w/wxvfufvub.css';
import '../../css/h/h-8xygb0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="sq0uj5bje"/><path class="wxvfufvub"/><path class="h-8xygb0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:edit-off"} {...others} />);
}

export default Component;
