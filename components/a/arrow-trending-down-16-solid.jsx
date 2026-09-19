import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1necl-fz.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="y1necl-fz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-trending-down-16-solid"} {...others} />);
}

export default Component;
