import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/paqsr5_ph.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="paqsr5_ph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:video-player-slider-bold"} {...others} />);
}

export default Component;
