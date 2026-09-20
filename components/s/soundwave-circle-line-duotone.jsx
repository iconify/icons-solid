import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j-heh34pv.css';
import '../../css/c/cz-6xlbfk.css';
import '../../css/d/dvt7o1bcw.css';
import '../../css/l/l80i0rb1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j-heh34pv"/><path class="cz-6xlbfk"/><path class="dvt7o1bcw"/><path class="l80i0rb1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:soundwave-circle-line-duotone"} {...others} />);
}

export default Component;
