import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fo_phgozt.css';
import '../../css/c/c7-acjc4q.css';
import '../../css/n/n2-k-0btv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fo_phgozt"/><path class="c7-acjc4q"/><path class="n2-k-0btv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ceiling-light-20-bold"} {...others} />);
}

export default Component;
