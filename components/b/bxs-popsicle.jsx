import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxtpt-biy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mxtpt-biy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-popsicle"} {...others} />);
}

export default Component;
