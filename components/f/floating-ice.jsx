import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2gaz5f5k.css';
import '../../css/d/dwp5wptcr.css';
import '../../css/i/i0l1ddgfi.css';
import '../../css/g/g0-vvfbvk.css';
import '../../css/v/ve37psgqe.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/sjc6__bgs.css';
import '../../css/p/pia1srb9z.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="t2gaz5f5k"/><path class="dwp5wptcr"/><path class="i0l1ddgfi"/><path class="g0-vvfbvk"/><path class="ve37psgqe"/><g class="jn8qy4bru"><path class="sjc6__bgs"/><path class="pia1srb9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:floating-ice"} {...others} />);
}

export default Component;
