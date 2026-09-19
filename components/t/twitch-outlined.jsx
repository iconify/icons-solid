import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r00akdbix.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="r00akdbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:twitch-outlined"} {...others} />);
}

export default Component;
