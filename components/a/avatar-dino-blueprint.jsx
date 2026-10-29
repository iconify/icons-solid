import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hbwf3nbad.css';
import '../../css/x/xupe0ib4r.css';
import '../../css/i/i2h8khgsx.css';
import '../../css/o/o75ukvbpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="hbwf3nbad wm-deco"/><path class="wm-deco xupe0ib4r"/><path class="i2h8khgsx wm-k"/><circle class="o75ukvbpp wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-dino-blueprint"} {...others} />);
}

export default Component;
