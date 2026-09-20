import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmnc7rkzn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cmnc7rkzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:arrow-down-small-outline"} {...others} />);
}

export default Component;
