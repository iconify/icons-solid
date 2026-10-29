import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w0uv33vum.css';
import '../../css/f/f3-iv-3ow.css';
import '../../css/w/w0oyb6d3k.css';
import '../../css/r/re6gqqbct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="w0uv33vum"/><path class="f3-iv-3ow wm-a"/><path class="w0oyb6d3k"/><path class="re6gqqbct wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sailboat"} {...others} />);
}

export default Component;
