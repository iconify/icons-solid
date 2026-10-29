import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pxcylebuj.css';
import '../../css/s/sl7siidbt.css';
import '../../css/z/z4fg99pfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pxcylebuj"/><path class="sl7siidbt wm-a"/><path class="wm-s z4fg99pfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:smile-plus"} {...others} />);
}

export default Component;
