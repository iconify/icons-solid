import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wf0wuc1-u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wf0wuc1-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:chevron-right"} {...others} />);
}

export default Component;
