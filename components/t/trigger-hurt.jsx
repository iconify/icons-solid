import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ix7dw7eey.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ix7dw7eey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:trigger-hurt"} {...others} />);
}

export default Component;
