import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-o_3jm7k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-o_3jm7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:a-arrow-down"} {...others} />);
}

export default Component;
