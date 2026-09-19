import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snk5pxbny.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="snk5pxbny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:bitcoin"} {...others} />);
}

export default Component;
