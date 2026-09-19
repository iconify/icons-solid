import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/i/itbdp0qfs.css';
import '../../css/z/zyiv5_b3e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="itbdp0qfs"/><path class="zyiv5_b3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bookmark-one"} {...others} />);
}

export default Component;
