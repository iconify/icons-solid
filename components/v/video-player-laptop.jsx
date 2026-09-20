import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dt4628b2m.css';
import '../../css/i/i-k0p7brm.css';
import '../../css/t/tajnggped.css';
import '../../css/w/wg7xl2btw.css';
import '../../css/k/k0rdz50zp.css';
import '../../css/d/d326j68ju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dt4628b2m"/><path class="i-k0p7brm"/><path class="tajnggped"/><path class="wg7xl2btw"/><path class="k0rdz50zp"/><path class="d326j68ju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:video-player-laptop"} {...others} />);
}

export default Component;
