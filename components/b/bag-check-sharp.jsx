import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnge6pbba.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wnge6pbba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:bag-check-sharp"} {...others} />);
}

export default Component;
