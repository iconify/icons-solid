import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfoxw2uzn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nfoxw2uzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:first-aid-kit"} {...others} />);
}

export default Component;
