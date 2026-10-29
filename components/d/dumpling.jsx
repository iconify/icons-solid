import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jstsvibwd.css';
import '../../css/n/n8lapqogo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jstsvibwd"/><path class="n8lapqogo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dumpling"} {...others} />);
}

export default Component;
