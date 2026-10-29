import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/x49uqwbjn.css';
import '../../css/b/brfohtb0o.css';
import '../../css/o/oun623fgc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco x49uqwbjn"/><path class="brfohtb0o wm-deco"/><path class="oun623fgc wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:barcode-blueprint"} {...others} />);
}

export default Component;
