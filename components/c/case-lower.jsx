import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jevsxkbae.css';
import '../../css/i/ikbdxb4_m.css';
import '../../css/v/vglq0cber.css';
import '../../css/h/h0zev5kxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jevsxkbae"/><path class="ikbdxb4_m"/><path class="vglq0cber"/><path class="h0zev5kxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:case-lower"} {...others} />);
}

export default Component;
