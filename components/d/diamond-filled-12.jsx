import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mojhw-3qz.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="mojhw-3qz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:diamond-filled-12"} {...others} />);
}

export default Component;
