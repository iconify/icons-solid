import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5y8o05ey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i5y8o05ey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:chevron-left"} {...others} />);
}

export default Component;
