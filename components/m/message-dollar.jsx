import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-0bxcc4l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u-0bxcc4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:message-dollar"} {...others} />);
}

export default Component;
