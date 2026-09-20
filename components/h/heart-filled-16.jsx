import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pi4ot5f0o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pi4ot5f0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:heart-filled-16"} {...others} />);
}

export default Component;
