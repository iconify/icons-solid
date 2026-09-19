import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhtkhwboa.css';
import '../../css/z/z600ygqlh.css';
import '../../css/o/ouq7y6d3w.css';
import '../../css/x/xfsflobmm.css';
import '../../css/f/fls75h9qh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qhtkhwboa"/><path class="z600ygqlh"/><g class="ouq7y6d3w"><circle class="xfsflobmm"/><path class="fls75h9qh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:mms"} {...others} />);
}

export default Component;
