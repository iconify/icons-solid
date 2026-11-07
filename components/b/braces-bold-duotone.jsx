import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfhi03nez.css';
import '../../css/j/jy4wz_42m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hfhi03nez"/><path class="jy4wz_42m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:braces-bold-duotone"} {...others} />);
}

export default Component;
