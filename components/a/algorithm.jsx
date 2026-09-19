import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/m9vtpl1ua.css';
import '../../css/h/h1l3ucb2g.css';
import '../../css/f/fjqjieb5u.css';
import '../../css/g/gpwwogbhk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="m9vtpl1ua"/><path class="h1l3ucb2g"/><path class="fjqjieb5u"/><path class="gpwwogbhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:algorithm"} {...others} />);
}

export default Component;
