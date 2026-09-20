import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqwid4b-o.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="sqwid4b-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-indent-right-alignment-align-indent-paragraph-formatting-right-text"} {...others} />);
}

export default Component;
