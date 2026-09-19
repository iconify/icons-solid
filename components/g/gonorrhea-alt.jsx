import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/plpbm6b2f.css';
import '../../css/z/zabmlzbvr.css';
import '../../css/w/w9jf0vajj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="plpbm6b2f"/><path clip-rule="evenodd" class="zabmlzbvr"/><path class="w9jf0vajj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:gonorrhea-alt"} {...others} />);
}

export default Component;
