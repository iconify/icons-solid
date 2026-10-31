import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/eeti25b6w.css';
import '../../css/a/aquxjp_5d.css';
import '../../css/u/u4zfh0ltz.css';
import '../../css/v/v7fi7eb_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="eeti25b6w wm-shadow"/><path class="aquxjp_5d wm-shadow"/><path class="u4zfh0ltz"/><path class="v7fi7eb_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:layers"} {...others} />);
}

export default Component;
