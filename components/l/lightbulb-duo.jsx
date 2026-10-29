import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a-ewlxb5r.css';
import '../../css/s/sv8__t8-c.css';
import '../../css/d/dz3e1ibvs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="a-ewlxb5r"/><path class="sv8__t8-c wm-a"/><path class="dz3e1ibvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lightbulb-duo"} {...others} />);
}

export default Component;
