import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvz2snqgx.css';
import '../../css/g/gulcoab9z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pvz2snqgx"/><path class="gulcoab9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sand-battery-20"} {...others} />);
}

export default Component;
