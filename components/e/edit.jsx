import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x3u46_gnm.css';
import '../../css/p/pax2o58mx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="x3u46_gnm"/><path class="pax2o58mx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:edit"} {...others} />);
}

export default Component;
