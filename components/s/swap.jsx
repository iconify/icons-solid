import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jt54-o5yg.css';
import '../../css/p/pqgj8yh1x.css';
import '../../css/s/sdu7iab5q.css';
import '../../css/z/zdgxbg6ki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jt54-o5yg"/><path class="pqgj8yh1x"/><path class="sdu7iab5q"/><path class="zdgxbg6ki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:swap"} {...others} />);
}

export default Component;
