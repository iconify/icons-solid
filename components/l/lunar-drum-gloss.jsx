import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eo5hqoh_u.css';
import '../../css/z/zc19i2bov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="eo5hqoh_u wm-k"/><path class="wm-a zc19i2bov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lunar-drum-gloss"} {...others} />);
}

export default Component;
