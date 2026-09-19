import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/ry177p3-m.css';
import '../../css/i/iog5bvc2b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="ry177p3-m"/><path class="iog5bvc2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:box"} {...others} />);
}

export default Component;
