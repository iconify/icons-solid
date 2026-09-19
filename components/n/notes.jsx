import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x1z93vb9e.css';
import '../../css/i/ir8prxc9v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="x1z93vb9e"/><path class="ir8prxc9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:notes"} {...others} />);
}

export default Component;
