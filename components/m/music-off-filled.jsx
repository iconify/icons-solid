import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s68wt2biy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s68wt2biy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:music-off-filled"} {...others} />);
}

export default Component;
