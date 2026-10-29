import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/ufn3m0bhg.css';
import '../../css/h/hfgvspbxq.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/b/bz_co8e9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ufn3m0bhg wm-deco"/><path class="hfgvspbxq wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="bz_co8e9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gift-blueprint"} {...others} />);
}

export default Component;
