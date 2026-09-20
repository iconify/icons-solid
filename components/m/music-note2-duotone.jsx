import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w8-x1x6iv.css';
import '../../css/u/ur64cxi6w.css';
import '../../css/l/lkv0xnbqa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="w8-x1x6iv"/><path clip-rule="evenodd" class="ur64cxi6w"/><path class="lkv0xnbqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music-note2-duotone"} {...others} />);
}

export default Component;
