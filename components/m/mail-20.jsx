import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pidvdx4pz.css';
import '../../css/w/wwg46r7ku.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pidvdx4pz"/><path class="wwg46r7ku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mail-20"} {...others} />);
}

export default Component;
