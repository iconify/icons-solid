import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e06y5c2ws.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e06y5c2ws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:player-pause-filled"} {...others} />);
}

export default Component;
