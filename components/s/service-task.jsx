import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/looy1fptd.css';
import '../../css/w/wesrhrbfh.css';

const viewBox = {"width":2000,"height":2000};
const content = `<g transform="translate(0 947.638)"><rect class="looy1fptd"/><path class="wesrhrbfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:service-task"} {...others} />);
}

export default Component;
