import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-r4blpba.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="d-r4blpba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:sugarcane-stalk-with-leaves"} {...others} />);
}

export default Component;
