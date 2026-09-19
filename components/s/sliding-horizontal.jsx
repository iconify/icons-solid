import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/k/kx04fnnhl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="vkcj4bcdm"/><path class="kx04fnnhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sliding-horizontal"} {...others} />);
}

export default Component;
