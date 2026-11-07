import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_aluvvdv.css';
import '../../css/o/oj3cw1blx.css';
import '../../css/h/hepad7g3n.css';
import '../../css/w/w6r8jvb9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_aluvvdv"/><path class="oj3cw1blx"/><path class="hepad7g3n"/><path clip-rule="evenodd" class="w6r8jvb9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:kanban-square-outline"} {...others} />);
}

export default Component;
