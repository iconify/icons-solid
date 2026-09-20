import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1-n18b8h.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="i1-n18b8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:contact-book-remix"} {...others} />);
}

export default Component;
