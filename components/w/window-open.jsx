import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t6gujxbpw.css';
import '../../css/v/vs7bm4bgh.css';
import '../../css/o/opyesnr4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="t6gujxbpw"/><path class="vs7bm4bgh"/><path class="opyesnr4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:window-open"} {...others} />);
}

export default Component;
