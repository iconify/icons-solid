import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ac1m7ezbo.css';
import '../../css/h/h4vcpvbdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ac1m7ezbo"/><path class="h4vcpvbdh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cat"} {...others} />);
}

export default Component;
