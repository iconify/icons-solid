import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd5n7t3xa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vd5n7t3xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-heart-monitor-filled"} {...others} />);
}

export default Component;
