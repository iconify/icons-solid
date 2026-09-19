import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3p7ifb9n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c3p7ifb9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:x-mark-16-solid"} {...others} />);
}

export default Component;
