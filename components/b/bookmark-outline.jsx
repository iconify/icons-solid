import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn-5o7bqz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jn-5o7bqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:bookmark-outline"} {...others} />);
}

export default Component;
