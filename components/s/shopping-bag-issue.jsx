import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pi79h_b5e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pi79h_b5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:shopping-bag-issue"} {...others} />);
}

export default Component;
