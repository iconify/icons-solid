import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjt6f0b6l.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="hjt6f0b6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:pi-symbol-circle-remix"} {...others} />);
}

export default Component;
