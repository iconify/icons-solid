import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-w_9x0ol.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="r-w_9x0ol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:aspect-ratio"} {...others} />);
}

export default Component;
