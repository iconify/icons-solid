import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2jtk7bby.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f2jtk7bby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:calendar-minus-outline"} {...others} />);
}

export default Component;
