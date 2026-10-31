import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rnjik9b_u.css';
import '../../css/l/l7jkn8v6k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="rnjik9b_u wm-a"/><path class="l7jkn8v6k wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-woman-bun-gloss"} {...others} />);
}

export default Component;
