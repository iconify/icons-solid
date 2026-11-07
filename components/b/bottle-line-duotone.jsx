import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wf6hfwbfe.css';
import '../../css/r/r7j2fkb1b.css';
import '../../css/d/d9nm02b3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wf6hfwbfe"/><path class="r7j2fkb1b"/><path class="d9nm02b3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bottle-line-duotone"} {...others} />);
}

export default Component;
