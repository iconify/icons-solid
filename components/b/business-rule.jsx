import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfwtfdz8c.css';
import '../../css/r/rzh_o5duh.css';

const viewBox = {"width":2000,"height":2000};
const content = `<path class="bfwtfdz8c"/><path class="rzh_o5duh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:business-rule"} {...others} />);
}

export default Component;
