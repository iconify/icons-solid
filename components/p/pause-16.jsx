import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zntwc7g4x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zntwc7g4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:pause-16"} {...others} />);
}

export default Component;
