import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/uok9l6b4m.css';
import '../../css/f/fwnfypblo.css';
import '../../css/k/ko78pjhzg.css';
import '../../css/m/m2undvcjg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="h01tyzbfu"><path class="uok9l6b4m"/><path class="fwnfypblo"/><path class="ko78pjhzg"/><path class="m2undvcjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:lock-rotation"} {...others} />);
}

export default Component;
