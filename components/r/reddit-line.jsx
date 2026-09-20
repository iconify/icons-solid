import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzy6q1jjd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tzy6q1jjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:reddit-line"} {...others} />);
}

export default Component;
