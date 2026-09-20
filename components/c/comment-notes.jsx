import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w53kg79zh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w53kg79zh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:comment-notes"} {...others} />);
}

export default Component;
