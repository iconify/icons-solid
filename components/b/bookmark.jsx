import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/q/qgryp0big.css';
import '../../css/e/eif875blk.css';
import '../../css/u/uuadrccgu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="qgryp0big"/><path clip-rule="evenodd" class="eif875blk"/><path class="uuadrccgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bookmark"} {...others} />);
}

export default Component;
