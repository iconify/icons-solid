import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_fvll7vg.css';
import '../../css/m/mdlomob-h.css';
import '../../css/w/w4rg-tzhz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r_fvll7vg"/><path class="mdlomob-h"/><path class="w4rg-tzhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:speaker-wifi-20"} {...others} />);
}

export default Component;
