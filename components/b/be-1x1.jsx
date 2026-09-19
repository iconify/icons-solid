import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/e/e3m7h668b.css';
import '../../css/s/swpuiqbsh.css';
import '../../css/y/yun868b6i.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="nv9qcacyl"><path class="e3m7h668b"/><path class="swpuiqbsh"/><path class="yun868b6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:be-1x1"} {...others} />);
}

export default Component;
