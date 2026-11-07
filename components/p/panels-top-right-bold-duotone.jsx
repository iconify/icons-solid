import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2c2_w_6w.css';
import '../../css/r/r59yt9kbk.css';
import '../../css/i/ihrvnl4wp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y2c2_w_6w"/><path class="r59yt9kbk"/><path class="ihrvnl4wp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-top-right-bold-duotone"} {...others} />);
}

export default Component;
