import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9w0v0j8h.css';
import '../../css/k/kyt7f6bbc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n9w0v0j8h"/><path class="kyt7f6bbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nacelle-20-bold"} {...others} />);
}

export default Component;
