import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3ibv6b2a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f3ibv6b2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:preregistered-de-tc-plus"} {...others} />);
}

export default Component;
