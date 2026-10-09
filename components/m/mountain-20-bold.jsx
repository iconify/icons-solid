import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrn2qju6o.css';
import '../../css/b/bgn-z-bhy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hrn2qju6o"/><path class="bgn-z-bhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mountain-20-bold"} {...others} />);
}

export default Component;
