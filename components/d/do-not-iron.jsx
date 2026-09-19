import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewi53ukxm.css';

const viewBox = {"width":512,"height":496};
const content = `<path class="ewi53ukxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:do-not-iron"} {...others} />);
}

export default Component;
