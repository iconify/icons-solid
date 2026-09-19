import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ji7x0bcjo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ji7x0bcjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:filetype-ppt"} {...others} />);
}

export default Component;
