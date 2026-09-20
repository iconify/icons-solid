import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j4zrhw3ad.css';
import '../../css/u/uttk3rw3q.css';
import '../../css/x/x_i_7_eop.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="j4zrhw3ad"/><path class="uttk3rw3q"/><path class="x_i_7_eop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:composition-paronama-horizontal"} {...others} />);
}

export default Component;
