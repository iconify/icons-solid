import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj9vjz3-n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jj9vjz3-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:server-time-usage"} {...others} />);
}

export default Component;
