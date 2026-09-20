import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rawbtr-6p.css';
import '../../css/p/p28r9n0-i.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rawbtr-6p"/><path class="p28r9n0-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:shooting-star"} {...others} />);
}

export default Component;
