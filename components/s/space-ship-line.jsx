import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flgm55cub.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="flgm55cub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:space-ship-line"} {...others} />);
}

export default Component;
