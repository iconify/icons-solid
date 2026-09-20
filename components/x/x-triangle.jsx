import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-l9c4vor.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g-l9c4vor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:x-triangle"} {...others} />);
}

export default Component;
