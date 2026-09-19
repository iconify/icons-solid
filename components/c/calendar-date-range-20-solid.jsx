import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj-krkb_k.css';
import '../../css/a/a8x_xccwb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cj-krkb_k"/><path clip-rule="evenodd" class="a8x_xccwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:calendar-date-range-20-solid"} {...others} />);
}

export default Component;
