import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/awghp3pyj.css';
import '../../css/l/l9s63tb1w.css';
import '../../css/d/dr_3fr28m.css';
import '../../css/r/r6hn8gbbw.css';
import '../../css/j/j4-bubc4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="awghp3pyj"/><path class="l9s63tb1w"/><path class="dr_3fr28m"/><path class="r6hn8gbbw"/><path class="j4-bubc4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:business-cash-scale-balance"} {...others} />);
}

export default Component;
