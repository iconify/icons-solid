import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulzgxb59r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ulzgxb59r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:swipe-two-fingers-down-gesture"} {...others} />);
}

export default Component;
