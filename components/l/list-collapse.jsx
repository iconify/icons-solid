import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqvgq0beg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tqvgq0beg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:list-collapse"} {...others} />);
}

export default Component;
