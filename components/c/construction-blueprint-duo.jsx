import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i0yalr5ir.css';
import '../../css/w/w-d6ioleq.css';
import '../../css/y/ysumzp_0y.css';
import '../../css/r/rsa-60bui.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="i0yalr5ir"/><path class="w-d6ioleq"/><path class="ysumzp_0y"/><path class="rsa-60bui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:construction-blueprint-duo"} {...others} />);
}

export default Component;
