import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r3q-l6bmy.css';
import '../../css/z/z4fg99pfy.css';
import '../../css/p/pxcylebuj.css';
import '../../css/s/sl7siidbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="r3q-l6bmy"/><path class="wm-s z4fg99pfy"/><path class="pxcylebuj"/><path class="sl7siidbt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:smile-plus-duo"} {...others} />);
}

export default Component;
