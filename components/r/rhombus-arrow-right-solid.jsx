import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nohw-0bfs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nohw-0bfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:rhombus-arrow-right-solid"} {...others} />);
}

export default Component;
