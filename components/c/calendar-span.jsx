import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/eiurq3tnm.css';
import '../../css/a/aj__h47xf.css';
import '../../css/o/ot_9w3bfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="eiurq3tnm"/><path class="aj__h47xf"/><path class="ot_9w3bfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:calendar-span"} {...others} />);
}

export default Component;
