import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/l/lsbc4i1sw.css';
import '../../css/g/gcng8vetl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="lsbc4i1sw"/><path class="gcng8vetl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:home-two"} {...others} />);
}

export default Component;
