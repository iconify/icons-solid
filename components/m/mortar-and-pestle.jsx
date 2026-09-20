import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlr6yzbhm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nlr6yzbhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:mortar-and-pestle"} {...others} />);
}

export default Component;
