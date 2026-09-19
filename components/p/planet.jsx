import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jjh499b3r.css';
import '../../css/v/van1pxdhn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="jjh499b3r"/><path class="van1pxdhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:planet"} {...others} />);
}

export default Component;
