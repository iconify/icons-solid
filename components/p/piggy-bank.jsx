import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9_3wacqf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g9_3wacqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:piggy-bank"} {...others} />);
}

export default Component;
