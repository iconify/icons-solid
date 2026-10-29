import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rbfqm4b8t.css';
import '../../css/p/phu6f7bmz.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/e/euhc06b6i.css';
import '../../css/r/r309anzoi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="rbfqm4b8t wm-deco"/><path class="phu6f7bmz wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="euhc06b6i wm-k"/><path class="r309anzoi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:building-blueprint"} {...others} />);
}

export default Component;
