import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wf0r_fblp.css';
import '../../css/n/n8lapqogo.css';
import '../../css/j/jstsvibwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wf0r_fblp"/><path class="n8lapqogo wm-a"/><path class="jstsvibwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dumpling-duo"} {...others} />);
}

export default Component;
