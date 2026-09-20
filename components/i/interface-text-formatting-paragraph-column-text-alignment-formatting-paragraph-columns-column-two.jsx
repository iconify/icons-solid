import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1o_7ksyo.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="u1o_7ksyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-paragraph-column-text-alignment-formatting-paragraph-columns-column-two"} {...others} />);
}

export default Component;
