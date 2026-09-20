import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cpgy2mbct.css';
import '../../css/e/e5b98zs_u.css';
import '../../css/h/hm9_r3b6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="cpgy2mbct"/><path class="e5b98zs_u"/><path class="hm9_r3b6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:security-computer-shield"} {...others} />);
}

export default Component;
