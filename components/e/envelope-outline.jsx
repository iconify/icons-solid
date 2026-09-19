import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qksbz5ces.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qksbz5ces"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:envelope-outline"} {...others} />);
}

export default Component;
