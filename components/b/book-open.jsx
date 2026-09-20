import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byndn5bsa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="byndn5bsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:book-open"} {...others} />);
}

export default Component;
