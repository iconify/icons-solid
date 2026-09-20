import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k-m_0bc-f.css';
import '../../css/x/xu5eysboh.css';
import '../../css/j/j_qzpysrk.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="k-m_0bc-f"/><path class="xu5eysboh"/><path class="j_qzpysrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:tape-cassette-1"} {...others} />);
}

export default Component;
