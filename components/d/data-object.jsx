import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muvkmzizo.css';

const viewBox = {"width":2000,"height":2000};
const content = `<path class="muvkmzizo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:data-object"} {...others} />);
}

export default Component;
