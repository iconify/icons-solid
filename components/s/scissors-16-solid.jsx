import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d28tlbcov.css';
import '../../css/r/r173rlbez.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="d28tlbcov"/><path class="r173rlbez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:scissors-16-solid"} {...others} />);
}

export default Component;
