import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/t461t6bwv.css';
import '../../css/m/mvwg0m8ia.css';
import '../../css/t/t218te2ox.css';
import '../../css/s/sn_ixid1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="t461t6bwv wm-deco"/><path class="mvwg0m8ia wm-deco"/><path class="t218te2ox wm-deco"/><path class="sn_ixid1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:share-blueprint"} {...others} />);
}

export default Component;
