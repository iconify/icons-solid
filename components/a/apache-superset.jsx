import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2aj5q4dy.css';
import '../../css/w/wvwuueb-e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h2aj5q4dy"/><path class="wvwuueb-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:apache-superset"} {...others} />);
}

export default Component;
