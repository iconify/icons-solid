import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yp7mnabuu.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="yp7mnabuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-translate-options-text-translate"} {...others} />);
}

export default Component;
