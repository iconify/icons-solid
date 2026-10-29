import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/b0fy0_l-a.css';
import '../../css/j/jwedoejag.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/p/prgm-db-t.css';
import '../../css/m/mkl82bcfi.css';
import '../../css/d/da8zwfb5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="b0fy0_l-a wm-deco"/><path class="jwedoejag wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="prgm-db-t wm-k"/><path class="mkl82bcfi wm-a"/><path class="da8zwfb5x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:webcam-blueprint"} {...others} />);
}

export default Component;
