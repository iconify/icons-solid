import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-9fyzgba.css';

const viewBox = {"width":768,"height":646};
const content = `<path class="r-9fyzgba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:grayscale"} {...others} />);
}

export default Component;
