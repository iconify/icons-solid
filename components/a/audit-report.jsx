import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flqx9-u3u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="flqx9-u3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:audit-report"} {...others} />);
}

export default Component;
