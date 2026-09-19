import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg1t8_b4v.css';
import '../../css/l/lr3x0vl_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eg1t8_b4v"/><path class="lr3x0vl_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:food-menu"} {...others} />);
}

export default Component;
