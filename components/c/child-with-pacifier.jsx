import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/m-n68mb4o.css';
import '../../css/u/uhl4d3c0n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="m-n68mb4o"/><path class="uhl4d3c0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:child-with-pacifier"} {...others} />);
}

export default Component;
