import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/if5s8ebya.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="if5s8ebya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:movary-dark"} {...others} />);
}

export default Component;
