import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhvfzxc8c.css';
import '../../css/k/km4pjabfy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rhvfzxc8c"/><path class="km4pjabfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:circuit-composer"} {...others} />);
}

export default Component;
