import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yslf3cctx.css';
import '../../css/d/dc43t0b2s.css';
import '../../css/p/pgvt321cd.css';
import '../../css/d/dwptqjbme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yslf3cctx"/><path class="dc43t0b2s"/><path class="pgvt321cd"/><path class="dwptqjbme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:kanban-square-bold-duotone"} {...others} />);
}

export default Component;
