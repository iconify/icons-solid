import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhpin-0sd.css';
import '../../css/y/y9o-uoblu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rhpin-0sd"/><path class="y9o-uoblu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-woman"} {...others} />);
}

export default Component;
