import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j36ac2b3k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j36ac2b3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:message-square-warning-gloss"} {...others} />);
}

export default Component;
