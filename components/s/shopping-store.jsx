import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5468drzx.css';
import '../../css/z/zg9s_i7qh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="e5468drzx"/><path clip-rule="evenodd" class="zg9s_i7qh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:shopping-store"} {...others} />);
}

export default Component;
