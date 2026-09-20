import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-71aubjb.css';
import '../../css/s/s6yebsb7h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h-71aubjb"/><path class="s6yebsb7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lidarr-radarr-light"} {...others} />);
}

export default Component;
