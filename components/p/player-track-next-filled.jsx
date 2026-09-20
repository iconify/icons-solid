import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zkqw8efuw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zkqw8efuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:player-track-next-filled"} {...others} />);
}

export default Component;
