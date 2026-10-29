import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yu2ay2bcw.css';
import '../../css/f/fv6d5gchd.css';
import '../../css/j/jam8cccqq.css';
import '../../css/w/w0-632-cs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yu2ay2bcw"/><path class="fv6d5gchd wm-a"/><path class="jam8cccqq wm-a"/><path class="w0-632-cs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chinese-knot-duo"} {...others} />);
}

export default Component;
