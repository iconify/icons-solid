import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9f9t-wdx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p9f9t-wdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:door-with-keyhole"} {...others} />);
}

export default Component;
