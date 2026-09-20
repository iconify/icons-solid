import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/g/gv6dagq1n.css';
import '../../css/u/ucpv59svk.css';
import '../../css/u/u13mrsbzy.css';
import '../../css/j/jdj1guqhy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="gv6dagq1n"/><path class="ucpv59svk"/><path class="u13mrsbzy"/><path class="jdj1guqhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:announcement-megaphone"} {...others} />);
}

export default Component;
