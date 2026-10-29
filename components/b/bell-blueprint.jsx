import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/v8qjwlxeq.css';
import '../../css/n/nn04bwbom.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/a/az6nf_bxe.css';
import '../../css/s/shte9bcuj.css';
import '../../css/u/u46tsabph.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="v8qjwlxeq wm-deco"/><path class="nn04bwbom wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="az6nf_bxe wm-k"/><path class="shte9bcuj wm-a"/><path class="u46tsabph wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bell-blueprint"} {...others} />);
}

export default Component;
