import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyscs09jg.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="wyscs09jg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:face-with-stuck-out-tongue-and-tightly-closed-eyes"} {...others} />);
}

export default Component;
