import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/k/krvb6vbdu.css';
import '../../css/d/d79ru3bml.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="nv9qcacyl"><path class="krvb6vbdu"/><path class="d79ru3bml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mc-1x1"} {...others} />);
}

export default Component;
