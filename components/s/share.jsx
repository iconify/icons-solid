import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbj5q2eai.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tbj5q2eai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:share"} {...others} />);
}

export default Component;
