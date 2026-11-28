import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kq238_bbk.css';
import '../../css/j/j5dc5xevt.css';
import '../../css/b/b_4jner7h.css';
import '../../css/p/p-jzhduoi.css';
import '../../css/c/cy-p0l3ul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kq238_bbk"/><path class="j5dc5xevt"/><path class="b_4jner7h"/><path class="p-jzhduoi"/><path class="cy-p0l3ul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:satellite-dish"} {...others} />);
}

export default Component;
