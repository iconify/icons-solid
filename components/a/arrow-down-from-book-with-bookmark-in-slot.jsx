import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/de0jk_bdx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="de0jk_bdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrow-down-from-book-with-bookmark-in-slot"} {...others} />);
}

export default Component;
