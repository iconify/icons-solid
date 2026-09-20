import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6vylkbxi.css';
import '../../css/g/g9spk5brk.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/z/zp-tryb2x.css';
import '../../css/h/h9f382bvk.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c6vylkbxi"/><path class="g9spk5brk"/><g class="jn8qy4bru"><path class="zp-tryb2x"/><path class="h9f382bvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:one-piece-swimsuit"} {...others} />);
}

export default Component;
