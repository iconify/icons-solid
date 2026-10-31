import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x321x6n8m.css';
import '../../css/p/p44obn_zo.css';
import '../../css/v/ve4_surhs.css';
import '../../css/c/c09a2_xea.css';
import '../../css/o/oqo4dbdmo.css';
import '../../css/l/lhoydwqub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow x321x6n8m"/><path class="p44obn_zo"/><path class="ve4_surhs"/><path class="c09a2_xea"/><path class="oqo4dbdmo"/><path class="lhoydwqub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:star"} {...others} />);
}

export default Component;
