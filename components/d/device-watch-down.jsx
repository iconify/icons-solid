import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikp_rhbez.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ikp_rhbez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-watch-down"} {...others} />);
}

export default Component;
