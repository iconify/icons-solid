import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4mkgjboz.css';

const viewBox = {"width":541,"height":730};
const content = `<path class="y4mkgjboz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:asciicircum"} {...others} />);
}

export default Component;
