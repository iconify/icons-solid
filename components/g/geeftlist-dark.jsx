import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6xfb8lhn.css';
import '../../css/t/tiltjra3x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u6xfb8lhn"/><path class="tiltjra3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:geeftlist-dark"} {...others} />);
}

export default Component;
