import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5ms-84tk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a5ms-84tk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:book-open-heart"} {...others} />);
}

export default Component;
