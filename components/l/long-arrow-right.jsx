import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arjc7_bym.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="arjc7_bym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:long-arrow-right"} {...others} />);
}

export default Component;
