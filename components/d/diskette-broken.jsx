import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kt1ahab5v.css';
import '../../css/a/adlaw-b6t.css';
import '../../css/o/onymejbgu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kt1ahab5v"/><path class="adlaw-b6t"/><path class="onymejbgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diskette-broken"} {...others} />);
}

export default Component;
