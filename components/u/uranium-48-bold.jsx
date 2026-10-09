import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9jey4b7b.css';
import '../../css/y/y5r8golxs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l9jey4b7b"/><path class="y5r8golxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:uranium-48-bold"} {...others} />);
}

export default Component;
