import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jpprgfbwi.css';
import '../../css/x/xh85tzb2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jpprgfbwi"/><path class="xh85tzb2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cloud-drizzle"} {...others} />);
}

export default Component;
