import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irgq9rb1q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="irgq9rb1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:heading-2"} {...others} />);
}

export default Component;
