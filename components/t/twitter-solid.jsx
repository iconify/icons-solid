import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf3y0_dgj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kf3y0_dgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:twitter-solid"} {...others} />);
}

export default Component;
