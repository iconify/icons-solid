import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/m6ifnhj0n.css';
import '../../css/y/yhrf3n8_m.css';
import '../../css/k/k1p-s986k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="m6ifnhj0n"/><path class="yhrf3n8_m"/><path class="k1p-s986k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:male"} {...others} />);
}

export default Component;
