import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ltr9r3b-m.css';
import '../../css/h/h4vcpvbdh.css';
import '../../css/a/ac1m7ezbo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ltr9r3b-m"/><path class="h4vcpvbdh wm-a"/><path class="ac1m7ezbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cat-duo"} {...others} />);
}

export default Component;
