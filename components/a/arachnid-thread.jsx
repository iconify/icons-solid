import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tl83o0buq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tl83o0buq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:arachnid-thread"} {...others} />);
}

export default Component;
