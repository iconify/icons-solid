import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kxhp7jbss.css';
import '../../css/u/ujc73kb6q.css';
import '../../css/m/m9i-7nbso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kxhp7jbss"/><path class="ujc73kb6q"/><path class="m9i-7nbso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suitcase-lines-bold"} {...others} />);
}

export default Component;
