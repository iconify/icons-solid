import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lg2tb8bko.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lg2tb8bko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:notification-plus"} {...others} />);
}

export default Component;
