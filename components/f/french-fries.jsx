import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvl0g4b9l.css';
import '../../css/t/t0smhdcbb.css';
import '../../css/y/ydr0iqjof.css';
import '../../css/w/wmz1arb3x.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="uvl0g4b9l"/><path class="t0smhdcbb"/><path class="ydr0iqjof"/><path class="wmz1arb3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:french-fries"} {...others} />);
}

export default Component;
