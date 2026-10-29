import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qi9le-b2c.css';
import '../../css/q/qv7s7bn6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qi9le-b2c"/><path class="qv7s7bn6a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ghost"} {...others} />);
}

export default Component;
