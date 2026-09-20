import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt680ud3u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lt680ud3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:presentation-board-graph-bold"} {...others} />);
}

export default Component;
