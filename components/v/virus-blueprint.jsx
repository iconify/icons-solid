import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nrlirxy2k.css';
import '../../css/f/fj7p-_bgu.css';
import '../../css/b/bxjv56brc.css';
import '../../css/s/swemmc6sx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="nrlirxy2k wm-deco"/><path class="fj7p-_bgu wm-deco"/><path class="bxjv56brc wm-deco"/><path class="swemmc6sx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:virus-blueprint"} {...others} />);
}

export default Component;
