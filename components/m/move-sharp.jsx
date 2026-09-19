import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cr-3m1bmf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cr-3m1bmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:move-sharp"} {...others} />);
}

export default Component;
