import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f31idh9jr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f31idh9jr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:scan-circle-sharp"} {...others} />);
}

export default Component;
