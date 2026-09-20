import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sc4cc4t7i.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="sc4cc4t7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:flagstick-with-pennant-on-square"} {...others} />);
}

export default Component;
