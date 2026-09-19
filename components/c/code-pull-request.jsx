import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ju1-0mb4z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ju1-0mb4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:code-pull-request"} {...others} />);
}

export default Component;
