import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/h/h3688zf_b.css';
import '../../css/s/s13dhxbgk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="h3688zf_b"/><path class="s13dhxbgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:circle-two-line"} {...others} />);
}

export default Component;
