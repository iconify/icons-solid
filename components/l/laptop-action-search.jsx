import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/urrt0qbsc.css';
import '../../css/c/c9qeozbdv.css';
import '../../css/a/ad3lw7vkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="urrt0qbsc"/><path class="c9qeozbdv"/><path class="ad3lw7vkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:laptop-action-search"} {...others} />);
}

export default Component;
