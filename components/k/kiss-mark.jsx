import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryqpjkjck.css';
import '../../css/d/dilosfb6g.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/o/onba5u3qq.css';
import '../../css/r/rtexz8bxx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ryqpjkjck"/><path class="dilosfb6g"/><g class="x8poo_bjf"><path class="onba5u3qq"/><path class="rtexz8bxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:kiss-mark"} {...others} />);
}

export default Component;
