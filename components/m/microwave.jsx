import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t8-4j7c2p.css';
import '../../css/x/xww6dnqya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="t8-4j7c2p"/><path class="wm-a xww6dnqya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:microwave"} {...others} />);
}

export default Component;
