import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x6pve2s3y.css';
import '../../css/s/s5hlx6soy.css';
import '../../css/m/mp5_upgbq.css';
import '../../css/e/e04kqrbnp.css';
import '../../css/l/lr1ofccoy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="x6pve2s3y"/><path class="s5hlx6soy"/><path class="mp5_upgbq"/><path clip-rule="evenodd" class="e04kqrbnp"/><path clip-rule="evenodd" class="lr1ofccoy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dropper-minimalistic-outline"} {...others} />);
}

export default Component;
