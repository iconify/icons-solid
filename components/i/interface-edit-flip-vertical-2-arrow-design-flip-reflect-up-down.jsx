import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rufm80bum.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rufm80bum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-flip-vertical-2-arrow-design-flip-reflect-up-down"} {...others} />);
}

export default Component;
