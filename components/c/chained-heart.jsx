import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ii_o8fy9g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ii_o8fy9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:chained-heart"} {...others} />);
}

export default Component;
