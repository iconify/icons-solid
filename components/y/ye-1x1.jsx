import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/y/y6ty87ont.css';
import '../../css/j/jfnvkb-8m.css';
import '../../css/j/jknsvfhjj.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="nv9qcacyl"><path class="y6ty87ont"/><path class="jfnvkb-8m"/><path class="jknsvfhjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ye-1x1"} {...others} />);
}

export default Component;
