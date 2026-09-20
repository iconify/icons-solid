import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sps-9q4ps.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sps-9q4ps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:radarr-anime-light"} {...others} />);
}

export default Component;
