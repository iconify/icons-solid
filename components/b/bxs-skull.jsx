import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ig5k0rbhh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ig5k0rbhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-skull"} {...others} />);
}

export default Component;
