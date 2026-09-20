import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ew2dh5b6e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ew2dh5b6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:observer-ai"} {...others} />);
}

export default Component;
