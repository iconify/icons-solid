import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r6n-7obqf.css';
import '../../css/a/alhtm980p.css';
import '../../css/x/xrrsnjbtq.css';
import '../../css/w/wi9iy9byq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="r6n-7obqf"/><path class="alhtm980p"/><path class="xrrsnjbtq"/><path class="wi9iy9byq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:skull"} {...others} />);
}

export default Component;
