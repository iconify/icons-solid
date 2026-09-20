import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9jl1r7rh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j9jl1r7rh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:stamp-outline"} {...others} />);
}

export default Component;
