import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uoazbdbsd.css';
import '../../css/r/rzmdligbf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uoazbdbsd"/><path class="rzmdligbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:candle-20-bold"} {...others} />);
}

export default Component;
