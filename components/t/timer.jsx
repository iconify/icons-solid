import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/id2r6acek.css';
import '../../css/h/hhl9zwbmk.css';
import '../../css/w/w-3ivgtla.css';
import '../../css/e/eescw1b9v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="id2r6acek wm-a"/><path class="hhl9zwbmk wm-k"/><path class="w-3ivgtla wm-k"/><path class="eescw1b9v wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:timer"} {...others} />);
}

export default Component;
