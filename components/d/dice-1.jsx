import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/a/a0pvibcpp.css';
import '../../css/c/ct1ovbots.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><rect class="a0pvibcpp"/><path class="ct1ovbots"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:dice-1"} {...others} />);
}

export default Component;
