import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1qjmetax.css';
import '../../css/e/ev3t13bln.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v1qjmetax"/><path class="ev3t13bln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:newspaper-20"} {...others} />);
}

export default Component;
