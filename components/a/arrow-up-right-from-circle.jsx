import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8u1jgjki.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j8u1jgjki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:arrow-up-right-from-circle"} {...others} />);
}

export default Component;
