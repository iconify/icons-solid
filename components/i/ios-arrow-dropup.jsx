import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc8rsybkr.css';
import '../../css/m/mabcrgb7q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lc8rsybkr"/><path class="mabcrgb7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-arrow-dropup"} {...others} />);
}

export default Component;
