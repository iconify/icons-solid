import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6vk5q15g.css';
import '../../css/r/reb4c0b4l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i6vk5q15g"/><path class="reb4c0b4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:link-external-24"} {...others} />);
}

export default Component;
