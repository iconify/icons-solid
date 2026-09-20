import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ckp6cybws.css';
import '../../css/m/mbe757b8i.css';
import '../../css/c/cypy5kbxi.css';
import '../../css/h/hux3t7bzg.css';
import '../../css/f/fg3jatmgl.css';
import '../../css/h/h7we53bgk.css';
import '../../css/l/luitbebdr.css';
import '../../css/r/r4lvucb0p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ckp6cybws"/><path class="mbe757b8i"/><path class="cypy5kbxi"/><path class="hux3t7bzg"/><path class="fg3jatmgl"/><path class="h7we53bgk"/><path class="luitbebdr"/><path class="r4lvucb0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:book-close-bookmark-1"} {...others} />);
}

export default Component;
