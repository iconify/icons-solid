import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e63f8fq3m.css';
import '../../css/o/oqdxdpjwb.css';
import '../../css/b/bb8vnzh5z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="e63f8fq3m wm-a"/><path class="oqdxdpjwb"/><path class="bb8vnzh5z wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:percent-duo"} {...others} />);
}

export default Component;
