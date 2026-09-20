import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7uz5csis.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j7uz5csis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:roman-numeral-iii"} {...others} />);
}

export default Component;
