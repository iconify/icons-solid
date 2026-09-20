import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9i3q3b6g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t9i3q3b6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:bookmarkcopy3"} {...others} />);
}

export default Component;
