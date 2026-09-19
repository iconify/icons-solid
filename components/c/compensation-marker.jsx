import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pf97cqb0h.css';

const viewBox = {"width":2000,"height":2000};
const content = `<path class="pf97cqb0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:compensation-marker"} {...others} />);
}

export default Component;
