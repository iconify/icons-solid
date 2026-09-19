import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lkypm2rcz.css';
import '../../css/y/ykd6qibfb.css';
import '../../css/u/upx1hp2on.css';
import '../../css/w/w31yv23hb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="radar-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="lkypm2rcz"/><path clip-rule="evenodd" class="ykd6qibfb"/><path clip-rule="evenodd" class="upx1hp2on"/><path class="w31yv23hb"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:radar-outline"} {...others} />);
}

export default Component;
