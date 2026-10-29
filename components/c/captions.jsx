import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/euj49csjz.css';
import '../../css/y/yd-bdcbtt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="euj49csjz"/><path class="wm-a yd-bdcbtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:captions"} {...others} />);
}

export default Component;
