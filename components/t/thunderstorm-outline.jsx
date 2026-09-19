import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kk0xwtbsy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kk0xwtbsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:thunderstorm-outline"} {...others} />);
}

export default Component;
