import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lvw-4wf-u.css';
import '../../css/e/eqp1polmy.css';
import '../../css/y/ya_ml8bfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="lvw-4wf-u"/><path class="eqp1polmy"/><path class="ya_ml8bfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:desktop-action-monitor-remove"} {...others} />);
}

export default Component;
