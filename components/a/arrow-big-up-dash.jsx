import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rk8zpy4cv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rk8zpy4cv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-big-up-dash"} {...others} />);
}

export default Component;
