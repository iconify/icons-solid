import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oydb5z4nx.css';
import '../../css/r/r6dsat99m.css';
import '../../css/g/g66mlkmat.css';
import '../../css/a/arh_q9bxf.css';
import '../../css/s/sybmwq3tj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="oydb5z4nx wm-shadow"/><path class="r6dsat99m"/><path class="g66mlkmat"/><path class="arh_q9bxf"/><path class="sybmwq3tj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:laptop"} {...others} />);
}

export default Component;
