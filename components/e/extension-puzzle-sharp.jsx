import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nh0bafb7z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nh0bafb7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:extension-puzzle-sharp"} {...others} />);
}

export default Component;
