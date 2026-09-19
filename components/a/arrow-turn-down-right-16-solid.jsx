import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wty1f8g4v.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="wty1f8g4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-turn-down-right-16-solid"} {...others} />);
}

export default Component;
