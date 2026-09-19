import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjdv0zb8x.css';
import '../../css/f/fvkle4b8d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mjdv0zb8x"/><path id="SVGI1EjMhei" class="fvkle4b8d"/><use width="100%" height="100%" href="#SVGI1EjMhei" transform="matrix(-1 0 0 1 512 0)"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:al-1x1"} {...others} />);
}

export default Component;
