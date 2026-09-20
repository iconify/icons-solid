import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ded-w7bdk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ded-w7bdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-play-vertical-outline"} {...others} />);
}

export default Component;
