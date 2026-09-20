import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uz675omgr.css';
import '../../css/c/cvipabcst.css';
import '../../css/s/sksjf7bpc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uz675omgr"/><path class="cvipabcst"/><path clip-rule="evenodd" class="sksjf7bpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:graph-dot-flat"} {...others} />);
}

export default Component;
