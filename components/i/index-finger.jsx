import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/p/pf4bw54jx.css';
import '../../css/y/y2wltgzpg.css';
import '../../css/y/yyg2ynbxg.css';
import '../../css/v/vbo-lh93k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="pf4bw54jx"/><path class="y2wltgzpg"/><path class="yyg2ynbxg"/><path class="vbo-lh93k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:index-finger"} {...others} />);
}

export default Component;
