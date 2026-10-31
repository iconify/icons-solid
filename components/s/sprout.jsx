import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/t8s3gk2zn.css';
import '../../css/v/vkl0g8m0z.css';
import '../../css/d/dodesoxih.css';
import '../../css/d/deno52g0w.css';
import '../../css/i/itlss8brk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="t8s3gk2zn wm-shadow"/><path class="vkl0g8m0z wm-shadow"/><path class="dodesoxih"/><path class="deno52g0w"/><path class="itlss8brk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:sprout"} {...others} />);
}

export default Component;
