import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pdsagcb-l.css';
import '../../css/x/xvqlmwgpz.css';
import '../../css/z/zmwvwabol.css';
import '../../css/l/luruawbpt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pdsagcb-l"/><path clip-rule="evenodd" class="xvqlmwgpz"/><path clip-rule="evenodd" class="zmwvwabol"/><path class="luruawbpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:address-book"} {...others} />);
}

export default Component;
