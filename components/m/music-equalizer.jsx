import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt2iqb_gp.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="yt2iqb_gp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:music-equalizer"} {...others} />);
}

export default Component;
