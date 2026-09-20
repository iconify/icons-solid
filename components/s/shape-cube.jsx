import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b_kv34bwu.css';
import '../../css/v/vbno8kv6y.css';
import '../../css/h/hsnp8gqct.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="b_kv34bwu"/><path class="vbno8kv6y"/><path class="hsnp8gqct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:shape-cube"} {...others} />);
}

export default Component;
