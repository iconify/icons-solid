import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suyoj3b9r.css';
import '../../css/r/r_aluvvdv.css';
import '../../css/o/oj3cw1blx.css';
import '../../css/h/hepad7g3n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="suyoj3b9r"/><path class="r_aluvvdv"/><path class="oj3cw1blx"/><path class="hepad7g3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:kanban-square-bold-duotone"} {...others} />);
}

export default Component;
