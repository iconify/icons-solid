import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvsk-v3li.css';
import '../../css/j/jegawebwo.css';
import '../../css/m/mcway_bxu.css';
import '../../css/p/psnj3mbqk.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="qvsk-v3li"/><circle class="jegawebwo"/><circle class="mcway_bxu"/><circle class="psnj3mbqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:xlrplug"} {...others} />);
}

export default Component;
