import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lewhszvsg.css';
import '../../css/k/kec79rbig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="lewhszvsg"/><path class="kec79rbig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:case-lower"} {...others} />);
}

export default Component;
