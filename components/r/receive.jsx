import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9cngdc1l.css';
import '../../css/e/ew7188tnn.css';
import '../../css/b/blb99bcah.css';

const viewBox = {"width":2000,"height":2000};
const content = `<g class="o9cngdc1l"><path class="ew7188tnn"/><path class="blb99bcah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:receive"} {...others} />);
}

export default Component;
