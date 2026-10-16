import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbw01lbki.css';
import '../../css/n/n2ifbxbof.css';
import '../../css/e/ecag-tbkr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kbw01lbki"/><path class="n2ifbxbof"/><path class="ecag-tbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ceiling-light-20"} {...others} />);
}

export default Component;
