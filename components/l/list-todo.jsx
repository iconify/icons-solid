import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lip-g3b5r.css';
import '../../css/b/brh819bvq.css';
import '../../css/l/lyd-dmbrm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lip-g3b5r"/><path class="brh819bvq"/><path class="lyd-dmbrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:list-todo"} {...others} />);
}

export default Component;
