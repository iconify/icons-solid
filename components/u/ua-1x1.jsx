import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/s/s7mvklbao.css';
import '../../css/w/wwoqqlb0b.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="nv9qcacyl"><path class="s7mvklbao"/><path class="wwoqqlb0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ua-1x1"} {...others} />);
}

export default Component;
