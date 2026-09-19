import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ek4jopj1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ek4jopj1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:chat-remove"} {...others} />);
}

export default Component;
