import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zc-21xt6j.css';
import '../../css/d/dxckk5x7i.css';
import '../../css/i/iioyx2-ru.css';
import '../../css/x/xkknsln7g.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zc-21xt6j"/><path clip-rule="evenodd" class="dxckk5x7i"/><path clip-rule="evenodd" class="iioyx2-ru"/><path clip-rule="evenodd" class="xkknsln7g"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:television-play-circle-off"} {...others} />);
}

export default Component;
