import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfkh_9xxh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bfkh_9xxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:vlcmediaplayer"} {...others} />);
}

export default Component;
