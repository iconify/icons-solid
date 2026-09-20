import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0g8mnbop.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i0g8mnbop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:garmin-grafana-dark"} {...others} />);
}

export default Component;
