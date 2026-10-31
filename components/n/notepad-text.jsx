import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n091jzbqs.css';
import '../../css/d/dsuauebjo.css';
import '../../css/l/lpjsstbnx.css';
import '../../css/r/r6d-dtbwf.css';
import '../../css/x/xpmxqu--v.css';
import '../../css/s/sf_1-962f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="n091jzbqs wm-shadow"/><path class="dsuauebjo"/><path class="lpjsstbnx"/><path class="r6d-dtbwf"/><path class="xpmxqu--v"/><path class="sf_1-962f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:notepad-text"} {...others} />);
}

export default Component;
