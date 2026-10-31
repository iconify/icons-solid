import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w7po3_1af.css';
import '../../css/r/rp69_bbnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="w7po3_1af wm-k"/><path class="rp69_bbnw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cricket-gloss"} {...others} />);
}

export default Component;
