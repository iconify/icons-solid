import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sw_yoi_9l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sw_yoi_9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:audio-lines"} {...others} />);
}

export default Component;
