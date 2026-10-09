import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvmjd2aub.css';
import '../../css/f/f6d284boh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pvmjd2aub"/><path class="f6d284boh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cylinder-20-bold"} {...others} />);
}

export default Component;
