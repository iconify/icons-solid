import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/obl4fsbsr.css';
import '../../css/s/shj84utyn.css';
import '../../css/i/ibfi7qbpz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="obl4fsbsr"/><path class="shj84utyn"/><path class="ibfi7qbpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:family-baby-change-diaper"} {...others} />);
}

export default Component;
