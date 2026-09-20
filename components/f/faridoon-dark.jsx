import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mj67-z5jn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mj67-z5jn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:faridoon-dark"} {...others} />);
}

export default Component;
