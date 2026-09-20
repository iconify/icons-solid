import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cq0w_7b_q.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cq0w_7b_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:hourglass-outline"} {...others} />);
}

export default Component;
