import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/w30tc0baw.css';
import '../../css/w/ws3ndf7es.css';
import '../../css/h/h5rxt79wz.css';
import '../../css/d/d8hvsle5g.css';
import '../../css/x/xpahp5btp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="w30tc0baw wm-deco"/><path class="wm-deco ws3ndf7es"/><path class="h5rxt79wz wm-deco"/><path class="d8hvsle5g"/><path class="xpahp5btp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thandai-blueprint"} {...others} />);
}

export default Component;
