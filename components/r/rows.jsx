import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lg-8n1num.css';
import '../../css/a/ae-e09b3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lg-8n1num"/><path class="ae-e09b3w wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rows"} {...others} />);
}

export default Component;
