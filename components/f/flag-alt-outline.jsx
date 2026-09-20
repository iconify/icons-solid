import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwhsll-1q.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nwhsll-1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:flag-alt-outline"} {...others} />);
}

export default Component;
