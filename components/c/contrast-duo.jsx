import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rruzdqb5y.css';
import '../../css/g/gwt5kac8n.css';
import '../../css/y/yw4fz_b6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="rruzdqb5y wm-a"/><path class="gwt5kac8n wm-a"/><path class="yw4fz_b6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:contrast-duo"} {...others} />);
}

export default Component;
