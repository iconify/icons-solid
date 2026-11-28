import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewmyn8hoi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ewmyn8hoi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:dice-four-solid"} {...others} />);
}

export default Component;
