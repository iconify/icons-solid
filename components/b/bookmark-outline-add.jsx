import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8txeybqq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a8txeybqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:bookmark-outline-add"} {...others} />);
}

export default Component;
