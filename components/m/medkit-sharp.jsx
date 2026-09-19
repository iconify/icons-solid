import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u98qkxxfj.css';
import '../../css/y/yy95vwqvp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u98qkxxfj"/><path class="yy95vwqvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:medkit-sharp"} {...others} />);
}

export default Component;
