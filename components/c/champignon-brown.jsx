import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzbvxs3ju.css';
import '../../css/x/x4i3-lbjr.css';
import '../../css/t/trbzr7ctk.css';
import '../../css/d/dfpcsmz2q.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/f9aewmrnj.css';
import '../../css/l/lus50ylyj.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wzbvxs3ju"/><path class="x4i3-lbjr"/><path class="trbzr7ctk"/><path class="dfpcsmz2q"/><g class="jn8qy4bru"><path class="f9aewmrnj"/><path class="lus50ylyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:champignon-brown"} {...others} />);
}

export default Component;
