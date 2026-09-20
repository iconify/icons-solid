import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w70lsgs8c.css';
import '../../css/t/t1b_i8bvs.css';
import '../../css/n/njg56qbhb.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="w70lsgs8c"><path class="t1b_i8bvs"/><path class="njg56qbhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:walking-symbol"} {...others} />);
}

export default Component;
