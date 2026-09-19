import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3t2cs7_k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c3t2cs7_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:filetype-md"} {...others} />);
}

export default Component;
