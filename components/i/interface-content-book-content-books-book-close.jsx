import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y04tfg5pj.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="y04tfg5pj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-content-book-content-books-book-close"} {...others} />);
}

export default Component;
