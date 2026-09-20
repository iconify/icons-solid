import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyqdx1fbu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gyqdx1fbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:turing-smart-screen-dark"} {...others} />);
}

export default Component;
