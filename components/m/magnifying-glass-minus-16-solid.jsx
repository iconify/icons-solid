import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zegr1dffz.css';
import '../../css/j/j7-kr4q1z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zegr1dffz"/><path clip-rule="evenodd" class="j7-kr4q1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:magnifying-glass-minus-16-solid"} {...others} />);
}

export default Component;
