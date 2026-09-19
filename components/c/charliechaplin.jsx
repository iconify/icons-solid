import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jo0qtufpx.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="jo0qtufpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:charliechaplin"} {...others} />);
}

export default Component;
