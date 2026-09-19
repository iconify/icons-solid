import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj3bwf33h.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="jj3bwf33h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:circle-chevron-left"} {...others} />);
}

export default Component;
