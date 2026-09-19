import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/ruz3jronq.css';
import '../../css/o/o7-mq32hy.css';
import '../../css/z/zkju8wbbf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ruz3jronq"/><path class="o7-mq32hy"/><path class="zkju8wbbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:camera-four"} {...others} />);
}

export default Component;
