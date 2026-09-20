import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ji7ws2beg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ji7ws2beg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:information-off-line"} {...others} />);
}

export default Component;
