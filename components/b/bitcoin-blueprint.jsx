import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/epjrbcbmn.css';
import '../../css/g/g442iwe_t.css';
import '../../css/d/dfr8kabwp.css';
import '../../css/o/omdwggbcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="epjrbcbmn wm-deco"/><path class="g442iwe_t wm-deco"/><path class="dfr8kabwp wm-k"/><path class="omdwggbcq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bitcoin-blueprint"} {...others} />);
}

export default Component;
