import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t2g9vpukt.css';
import '../../css/t/t0bsqbcnj.css';
import '../../css/e/el3yz5bek.css';
import '../../css/m/mrllr7yoh.css';
import '../../css/y/ydgoogb1u.css';
import '../../css/p/ppu94ac4x.css';
import '../../css/r/rxbmfc-fy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t2g9vpukt wm-k"/><path class="t0bsqbcnj wm-k"/><path class="el3yz5bek wm-a"/><path class="mrllr7yoh wm-a"/><path class="wm-shine ydgoogb1u"/><path class="ppu94ac4x wm-a"/><path class="rxbmfc-fy wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:door-open"} {...others} />);
}

export default Component;
