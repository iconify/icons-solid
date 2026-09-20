import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qdwkcav3b.css';
import '../../css/r/rxn5zs92s.css';
import '../../css/y/yb_8ueo6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qdwkcav3b"/><path class="rxn5zs92s"/><path class="yb_8ueo6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:waiting-room-clock"} {...others} />);
}

export default Component;
