import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/easqrty3q.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="easqrty3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:square-bluesky"} {...others} />);
}

export default Component;
