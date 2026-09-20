import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7zsvw32s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n7zsvw32s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:steering-line"} {...others} />);
}

export default Component;
