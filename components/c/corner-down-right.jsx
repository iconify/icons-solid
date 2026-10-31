import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/owd1uwb0f.css';
import '../../css/x/xc9kgo8by.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="owd1uwb0f"/><path class="xc9kgo8by"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:corner-down-right"} {...others} />);
}

export default Component;
