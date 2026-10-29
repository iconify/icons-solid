import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x-i5-k7eh.css';
import '../../css/z/zmn0zvbqa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="x-i5-k7eh"/><path class="wm-a zmn0zvbqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:eraser-solid"} {...others} />);
}

export default Component;
