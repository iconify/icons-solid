import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5eak3k2p.css';
import '../../css/w/wkp122bpd.css';
import '../../css/k/k5sbk1u4q.css';
import '../../css/p/pxqahlbbz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l5eak3k2p"><circle class="wkp122bpd wm-shadow"/><circle class="k5sbk1u4q"/><circle class="pxqahlbbz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:circle-dot"} {...others} />);
}

export default Component;
