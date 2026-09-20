import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dp8p9sznl.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dp8p9sznl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:drawing-pin"} {...others} />);
}

export default Component;
