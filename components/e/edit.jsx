import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x3u46_gnm.css';
import '../../css/c/cx62c8xso.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="x3u46_gnm"/><path class="cx62c8xso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:edit"} {...others} />);
}

export default Component;
