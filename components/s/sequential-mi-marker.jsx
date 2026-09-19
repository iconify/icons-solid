import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zg1q73zov.css';

const viewBox = {"width":2000,"height":2000};
const content = `<path class="zg1q73zov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:sequential-mi-marker"} {...others} />);
}

export default Component;
