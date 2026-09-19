import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5v5asbue.css';
import '../../css/d/djipz6cyr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w5v5asbue"/><path class="djipz6cyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:message-bubble-star"} {...others} />);
}

export default Component;
