import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hko-q4lad.css';
import '../../css/u/ujph6vdwt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hko-q4lad"/><path class="ujph6vdwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pipette-bold"} {...others} />);
}

export default Component;
