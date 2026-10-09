import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cc7985b_u.css';
import '../../css/v/v3ruwkbvo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cc7985b_u"/><path class="v3ruwkbvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scope-3-20-bold"} {...others} />);
}

export default Component;
