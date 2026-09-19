import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/o/odr9kebnr.css';
import '../../css/v/v-_fyf87r.css';
import '../../css/g/g-w8mh2vs.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="nv9qcacyl"><path class="odr9kebnr"/><path class="v-_fyf87r"/><path class="g-w8mh2vs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ro-1x1"} {...others} />);
}

export default Component;
