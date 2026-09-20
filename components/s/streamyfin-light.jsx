import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9rsmffna.css';
import '../../css/m/m3cywodxx.css';
import '../../css/v/vvhqz38eo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a9rsmffna"/><path class="m3cywodxx"/><path class="vvhqz38eo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:streamyfin-light"} {...others} />);
}

export default Component;
