import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c8-703b6t.css';
import '../../css/c/clsq4v3-l.css';
import '../../css/j/j-dbpmb7p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="c8-703b6t"/><path class="clsq4v3-l wm-a"/><path class="j-dbpmb7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bread-duo"} {...others} />);
}

export default Component;
