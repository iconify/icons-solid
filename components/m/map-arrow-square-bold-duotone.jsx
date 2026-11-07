import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/os7xz0mqz.css';
import '../../css/f/f3axzccsm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="os7xz0mqz"/><path class="f3axzccsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-arrow-square-bold-duotone"} {...others} />);
}

export default Component;
