import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1z9jtbha.css';
import '../../css/p/pllpyyb8j.css';
import '../../css/j/j07hvobsr.css';
import '../../css/u/u1q7c1byo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f1z9jtbha wm-k"/><path class="pllpyyb8j wm-k"/><path class="j07hvobsr wm-k"/><path class="u1q7c1byo wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:fish"} {...others} />);
}

export default Component;
