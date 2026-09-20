import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/ylicl4bsh.css';
import '../../css/p/p43_x888h.css';
import '../../css/j/j-2e7xbeo.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ylicl4bsh"/><path class="p43_x888h"/><path class="j-2e7xbeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:human-resources-businessman"} {...others} />);
}

export default Component;
