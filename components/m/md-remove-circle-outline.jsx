import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow83bgbqz.css';
import '../../css/x/xti0nob1z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ow83bgbqz"/><path class="xti0nob1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-remove-circle-outline"} {...others} />);
}

export default Component;
