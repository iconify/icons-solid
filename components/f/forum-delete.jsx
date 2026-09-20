import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uv7m9pbtl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uv7m9pbtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:forum-delete"} {...others} />);
}

export default Component;
