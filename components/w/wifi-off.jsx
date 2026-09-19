import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hk14dmbbe.css';
import '../../css/k/km46x-8as.css';
import '../../css/f/fov68487d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hk14dmbbe"/><circle class="km46x-8as"/><path class="fov68487d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:wifi-off"} {...others} />);
}

export default Component;
