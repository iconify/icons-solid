import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/on-ep5vsm.css';
import '../../css/k/khk74ibto.css';
import '../../css/j/j7hpscfgt.css';
import '../../css/v/v7vmxhb7b.css';
import '../../css/i/i8enl9bjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="on-ep5vsm"/><path class="khk74ibto"/><path class="j7hpscfgt wm-a"/><path class="v7vmxhb7b"/><path class="i8enl9bjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mic-vocal-duo"} {...others} />);
}

export default Component;
