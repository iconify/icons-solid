import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfafurbwi.css';
import '../../css/v/vbceozjtn.css';
import '../../css/q/qu8h2tbqf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yfafurbwi"/><path class="vbceozjtn"/><path class="qu8h2tbqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:city-1-filled"} {...others} />);
}

export default Component;
