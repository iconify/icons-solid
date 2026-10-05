import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/u/u_5gwlboh.css';
import '../../css/k/kssxsdvim.css';
import '../../css/q/q-olh7blc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="u_5gwlboh"/><path class="kssxsdvim"/><path class="q-olh7blc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:volume-2"} {...others} />);
}

export default Component;
