import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h3bpwcjgi.css';
import '../../css/u/u83h24b3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="h3bpwcjgi"/><path class="u83h24b3i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plane-landing"} {...others} />);
}

export default Component;
