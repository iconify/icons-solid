import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xngyb4r-h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xngyb4r-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:android-checkbox-outline-blank"} {...others} />);
}

export default Component;
