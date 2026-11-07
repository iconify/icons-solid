import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_8-bebjz.css';
import '../../css/c/c7izx4-ew.css';
import '../../css/x/x1etxubhn.css';
import '../../css/x/x8gppwbur.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y_8-bebjz"/><path class="c7izx4-ew"/><path class="x1etxubhn"/><path class="x8gppwbur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:floor-lamp-bold"} {...others} />);
}

export default Component;
