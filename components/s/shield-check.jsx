import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xrfn3bcyz.css';
import '../../css/r/rl0hurbau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="xrfn3bcyz"/><path class="rl0hurbau wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shield-check"} {...others} />);
}

export default Component;
