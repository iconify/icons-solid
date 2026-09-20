import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rph157bsx.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="rph157bsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:contact-book-solid"} {...others} />);
}

export default Component;
