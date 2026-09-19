import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/t/tbflkfbsb.css';
import '../../css/n/nt0stcbzz.css';
import '../../css/e/e_6nr1b5q.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="nv9qcacyl"><path class="tbflkfbsb"/><path class="nt0stcbzz"/><path class="e_6nr1b5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:co-1x1"} {...others} />);
}

export default Component;
