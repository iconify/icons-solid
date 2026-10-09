import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnafdbble.css';
import '../../css/i/in6vio3jf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nnafdbble"/><path class="in6vio3jf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:train-20"} {...others} />);
}

export default Component;
