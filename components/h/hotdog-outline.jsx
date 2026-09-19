import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pin2mcbkv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pin2mcbkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:hotdog-outline"} {...others} />);
}

export default Component;
