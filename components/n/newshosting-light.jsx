import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9aw4q0hs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u9aw4q0hs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:newshosting-light"} {...others} />);
}

export default Component;
