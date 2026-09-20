import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qelrpmbxt.css';
import '../../css/q/q9a1p2t7g.css';
import '../../css/c/ca6vo_0ub.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="qelrpmbxt"/><path class="q9a1p2t7g"/><path class="ca6vo_0ub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:family-child-play-ball-sign"} {...others} />);
}

export default Component;
