import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf20vue0q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yf20vue0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:player-eject-filled"} {...others} />);
}

export default Component;
