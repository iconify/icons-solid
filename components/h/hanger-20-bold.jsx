import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6sva07xu.css';
import '../../css/v/vt3tbsbdf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h6sva07xu"/><path class="vt3tbsbdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hanger-20-bold"} {...others} />);
}

export default Component;
