import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xg1a86kbb.css';
import '../../css/k/korc1hs3g.css';
import '../../css/c/ct8ahg6rh.css';
import '../../css/r/rzkeqkbxd.css';
import '../../css/t/tcjvbpb5r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco xg1a86kbb"/><path class="korc1hs3g wm-deco"/><path class="ct8ahg6rh wm-deco"/><path class="rzkeqkbxd wm-k"/><path class="tcjvbpb5r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gamepad-blueprint"} {...others} />);
}

export default Component;
