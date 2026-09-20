import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3-u2ubdr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f3-u2ubdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bench-with-backrest-in-rectangular-shelter"} {...others} />);
}

export default Component;
