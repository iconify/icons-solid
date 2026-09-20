import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/calya5bxg.css';
import '../../css/d/dq8f9xsoz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="calya5bxg"/><path class="dq8f9xsoz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:planning-center"} {...others} />);
}

export default Component;
