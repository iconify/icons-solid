import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kzf-j6w-o.css';
import '../../css/v/vowtk5b7c.css';
import '../../css/d/d9rdg7bdw.css';
import '../../css/n/nnz5zwbxf.css';
import '../../css/c/cpz80jb9p.css';
import '../../css/a/a1y87iz8q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><circle class="kzf-j6w-o"/><path class="vowtk5b7c"/><path class="d9rdg7bdw"/><path class="nnz5zwbxf"/><path class="cpz80jb9p"/><path class="a1y87iz8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:user-positioning"} {...others} />);
}

export default Component;
