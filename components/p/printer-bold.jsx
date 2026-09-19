import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qt2j16bug.css';
import '../../css/l/lc_o89b1g.css';
import '../../css/b/buyzzpuhk.css';
import '../../css/n/n1-jwdbbk.css';
import '../../css/y/yax8cqbao.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qt2j16bug"/><path class="lc_o89b1g"/><path class="buyzzpuhk"/><rect class="n1-jwdbbk"/><path class="yax8cqbao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:printer-bold"} {...others} />);
}

export default Component;
