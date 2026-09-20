import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qk4wf3-jg.css';
import '../../css/f/f7vr3ib9g.css';
import '../../css/q/q2umnybct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qk4wf3-jg"/><path class="f7vr3ib9g"/><path class="q2umnybct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:form-validation-cursor-choose"} {...others} />);
}

export default Component;
