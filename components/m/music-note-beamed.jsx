import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dqrt1ty8j.css';
import '../../css/r/rsh-9wb7s.css';
import '../../css/v/vsecb4i9o.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="dqrt1ty8j"/><path class="rsh-9wb7s"/><path class="vsecb4i9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:music-note-beamed"} {...others} />);
}

export default Component;
