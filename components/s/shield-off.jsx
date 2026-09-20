import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3xk5bt5o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y3xk5bt5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:shield-off"} {...others} />);
}

export default Component;
