import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/ts5dt37pz.css';
import '../../css/z/z0jrw3p8y.css';
import '../../css/b/bpdsg_leg.css';
import '../../css/g/gbdhdgqfy.css';
import '../../css/g/gavhrxd4b.css';
import '../../css/p/phew0bc4t.css';
import '../../css/m/mw-i3xxqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ts5dt37pz wm-shadow"/><path class="z0jrw3p8y"/><path class="bpdsg_leg"/><path class="gbdhdgqfy"/><path class="gavhrxd4b"/><path class="phew0bc4t"/><path class="mw-i3xxqi wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:map-pin-plus"} {...others} />);
}

export default Component;
