import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nio8jccck.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nio8jccck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:light-bulb-on"} {...others} />);
}

export default Component;
