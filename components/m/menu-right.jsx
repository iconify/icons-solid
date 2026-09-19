import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/j/jw6_s00qn.css';
import '../../css/u/uhr2_rb0p.css';
import '../../css/c/caw_8nb8t.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><path class="jw6_s00qn"/><path class="uhr2_rb0p"/><path class="caw_8nb8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:menu-right"} {...others} />);
}

export default Component;
