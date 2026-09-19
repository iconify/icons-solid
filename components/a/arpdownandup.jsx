import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdf0cbbal.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="kdf0cbbal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:arpdownandup"} {...others} />);
}

export default Component;
