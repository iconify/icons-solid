import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcnuh7clv.css';
import '../../css/y/y3s_gsbxm.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="wcnuh7clv"/><path class="y3s_gsbxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:thealgorithms-wordmark"} {...others} />);
}

export default Component;
