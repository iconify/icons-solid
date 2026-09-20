import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vy072qbkz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vy072qbkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:work-order-appointment-outline"} {...others} />);
}

export default Component;
