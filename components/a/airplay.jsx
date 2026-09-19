import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rkrcdf-xu.css';
import '../../css/r/r9htobc8z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="rkrcdf-xu"/><path class="r9htobc8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:airplay"} {...others} />);
}

export default Component;
