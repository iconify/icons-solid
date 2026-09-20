import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avw4glfim.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="avw4glfim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:atm-text-above-banknote-in-slot"} {...others} />);
}

export default Component;
