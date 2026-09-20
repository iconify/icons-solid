import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhuj0nbiy.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dhuj0nbiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:double-caret-down-small-outline"} {...others} />);
}

export default Component;
