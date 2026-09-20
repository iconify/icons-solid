import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8pd40b5k.css';
import '../../css/y/ylglf9x3a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y8pd40b5k"/><path class="ylglf9x3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:video-player-smartphone-horizontal"} {...others} />);
}

export default Component;
