import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tc9ndrb7h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tc9ndrb7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:pentagon"} {...others} />);
}

export default Component;
