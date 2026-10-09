import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6bo5g7fy.css';
import '../../css/p/p0blm-arr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x6bo5g7fy"/><path class="p0blm-arr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:jar-48"} {...others} />);
}

export default Component;
