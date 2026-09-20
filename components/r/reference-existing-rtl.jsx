import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f94x20bnf.css';
import '../../css/u/u7syfkble.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f94x20bnf"/><path class="u7syfkble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:reference-existing-rtl"} {...others} />);
}

export default Component;
