import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t37u2kbrr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="t37u2kbrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrow-up-to-envelope-in-slot"} {...others} />);
}

export default Component;
