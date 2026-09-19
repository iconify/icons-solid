import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r_oy-9bnl.css';
import '../../css/f/ft60xpbjk.css';
import '../../css/u/ubl173t1c.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="r_oy-9bnl"/><path class="ft60xpbjk"/><path class="ubl173t1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:th-4x3"} {...others} />);
}

export default Component;
