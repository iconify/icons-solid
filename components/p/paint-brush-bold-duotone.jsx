import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft-3lt0tv.css';
import '../../css/n/neh-dob8o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ft-3lt0tv"/><path class="neh-dob8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paint-brush-bold-duotone"} {...others} />);
}

export default Component;
