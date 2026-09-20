import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq-uolocg.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="wq-uolocg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-eraser-text-remove-format-formatting-eraser-delete"} {...others} />);
}

export default Component;
