import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kthkzmbmr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kthkzmbmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:subdirectory-left"} {...others} />);
}

export default Component;
