import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b3lribbqz.css';
import '../../css/z/zcdjnlb4u.css';
import '../../css/b/buvxuebiv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b3lribbqz"/><path class="zcdjnlb4u"/><path class="buvxuebiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:presentation-board-graph"} {...others} />);
}

export default Component;
