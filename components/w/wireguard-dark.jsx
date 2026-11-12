import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sk0h4l9rx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sk0h4l9rx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wireguard-dark"} {...others} />);
}

export default Component;
