import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0a8wrhwo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i0a8wrhwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:bot-plus"} {...others} />);
}

export default Component;
