import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmierzc3a.css';
import '../../css/t/t3qjwd-yy.css';

const viewBox = {"width":2000,"height":2000};
const content = `<path class="lmierzc3a"/><path class="t3qjwd-yy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:data-output"} {...others} />);
}

export default Component;
