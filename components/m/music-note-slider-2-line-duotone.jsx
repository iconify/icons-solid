import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m9lr-xbek.css';
import '../../css/f/f2-h4iwhz.css';
import '../../css/u/urw2-mb8r.css';
import '../../css/u/u-q19mbqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="m9lr-xbek"/><path class="f2-h4iwhz"/><path class="urw2-mb8r"/><path class="u-q19mbqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-slider-2-line-duotone"} {...others} />);
}

export default Component;
