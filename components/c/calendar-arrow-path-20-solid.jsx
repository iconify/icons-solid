import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wb1x9obgy.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="wb1x9obgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:calendar-arrow-path-20-solid"} {...others} />);
}

export default Component;
