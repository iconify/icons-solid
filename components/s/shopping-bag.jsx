import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y0hd2gbyh.css';
import '../../css/s/s4w2bf9id.css';
import '../../css/f/fbywhxb1m.css';
import '../../css/q/ql_ribb2e.css';
import '../../css/a/an1clnbuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow y0hd2gbyh"/><path class="s4w2bf9id"/><path class="fbywhxb1m"/><path class="ql_ribb2e"/><path class="an1clnbuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:shopping-bag"} {...others} />);
}

export default Component;
