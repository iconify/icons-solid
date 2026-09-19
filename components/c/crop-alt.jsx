import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7om_9bfk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b7om_9bfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:crop-alt"} {...others} />);
}

export default Component;
