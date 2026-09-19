import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3x3y2w-l.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="z3x3y2w-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrows-pointing-in-16-solid"} {...others} />);
}

export default Component;
