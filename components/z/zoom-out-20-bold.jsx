import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj3zoshwv.css';
import '../../css/l/l8fg_nb0u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jj3zoshwv"/><path class="l8fg_nb0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:zoom-out-20-bold"} {...others} />);
}

export default Component;
