import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfi0w_2co.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bfi0w_2co"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:keyframe-plus-in"} {...others} />);
}

export default Component;
