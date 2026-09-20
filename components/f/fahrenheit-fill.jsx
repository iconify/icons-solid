import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wp1vgjbpl.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><symbol id="SVGYOh97vgA" viewBox="0 0 99.5 70.9"><path class="wp1vgjbpl"/></symbol></defs><use width="99.5" height="70.9" href="#SVGYOh97vgA" transform="matrix(1.5 0 0 1.51 181.49 202.35)"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:fahrenheit-fill"} {...others} />);
}

export default Component;
