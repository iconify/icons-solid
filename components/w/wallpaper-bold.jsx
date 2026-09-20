import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lmfphabmw.css';
import '../../css/f/fm3subb2s.css';
import '../../css/y/yu9fkwahu.css';
import '../../css/l/l89t2ybtz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lmfphabmw"/><path class="fm3subb2s"/><path class="yu9fkwahu"/><path clip-rule="evenodd" class="l89t2ybtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallpaper-bold"} {...others} />);
}

export default Component;
