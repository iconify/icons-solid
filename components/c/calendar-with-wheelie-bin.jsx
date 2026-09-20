import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-4c9b3c.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="to-4c9b3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:calendar-with-wheelie-bin"} {...others} />);
}

export default Component;
