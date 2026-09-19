import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/js8pr3blz.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="js8pr3blz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:italic-16-solid"} {...others} />);
}

export default Component;
