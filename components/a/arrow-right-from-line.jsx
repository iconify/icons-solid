import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idq7gnb6z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="idq7gnb6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:arrow-right-from-line"} {...others} />);
}

export default Component;
