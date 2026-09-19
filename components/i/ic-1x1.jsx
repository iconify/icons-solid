import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/n/ncw4z3bwh.css';
import '../../css/w/wps4e9ynm.css';
import '../../css/f/fz7419b1g.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="nv9qcacyl"><path class="ncw4z3bwh"/><path class="wps4e9ynm"/><path class="fz7419b1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ic-1x1"} {...others} />);
}

export default Component;
