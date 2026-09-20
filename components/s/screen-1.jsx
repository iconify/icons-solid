import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/h77974q4y.css';
import '../../css/m/m9g3qknus.css';
import '../../css/s/sdfqq_u_y.css';
import '../../css/q/q9xhexbqw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="h77974q4y"/><path class="m9g3qknus"/><path class="sdfqq_u_y"/><path class="q9xhexbqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:screen-1"} {...others} />);
}

export default Component;
