import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjzhse32s.css';
import '../../css/y/y-a7xo-fg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mjzhse32s"/><path class="y-a7xo-fg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nacelle-20"} {...others} />);
}

export default Component;
