import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ds6outb7u.css';
import '../../css/r/rhman1omc.css';
import '../../css/a/agu9lxblm.css';

const viewBox = {"width":2000,"height":2000};
const content = `<g transform="translate(0 947.638)" class="ds6outb7u"><rect class="rhman1omc"/><path class="agu9lxblm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:manual-task"} {...others} />);
}

export default Component;
