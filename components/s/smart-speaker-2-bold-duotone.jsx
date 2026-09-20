import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/r/rld7fjmad.css';
import '../../css/d/dj3ck_bbc.css';
import '../../css/u/u_7rqwvjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="rld7fjmad"/><path class="dj3ck_bbc"/></g><path class="u_7rqwvjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-speaker-2-bold-duotone"} {...others} />);
}

export default Component;
