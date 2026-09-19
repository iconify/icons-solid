import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7zs_nueb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j7zs_nueb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:vimeo"} {...others} />);
}

export default Component;
