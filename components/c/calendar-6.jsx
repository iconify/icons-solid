import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7qvz7mub.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h7qvz7mub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:calendar-6"} {...others} />);
}

export default Component;
