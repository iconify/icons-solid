import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ya7id6pwo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ya7id6pwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:half-body-crawling"} {...others} />);
}

export default Component;
