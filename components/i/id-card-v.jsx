import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bwpzy-b4l.css';
import '../../css/d/db32suz7a.css';
import '../../css/a/a6_cycxia.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="bwpzy-b4l"/><path class="db32suz7a"/><path class="a6_cycxia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:id-card-v"} {...others} />);
}

export default Component;
