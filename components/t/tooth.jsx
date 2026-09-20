import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9bwdn8yu.css';
import '../../css/u/u06779bpm.css';
import '../../css/c/cn03m5p3t.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="k9bwdn8yu"/><path class="u06779bpm"/><path class="cn03m5p3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:tooth"} {...others} />);
}

export default Component;
