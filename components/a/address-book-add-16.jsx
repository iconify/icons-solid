import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_lwr5nhm.css';
import '../../css/f/flbxrybmh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c_lwr5nhm"/><path class="flbxrybmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:address-book-add-16"} {...others} />);
}

export default Component;
