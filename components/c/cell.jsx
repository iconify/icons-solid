import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnpipi1wn.css';
import '../../css/k/k8ldz2z3e.css';
import '../../css/y/yxoqvs3bi.css';
import '../../css/q/qnz-s-hbf.css';
import '../../css/c/c3mtq3vxr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="dnpipi1wn"><path class="k8ldz2z3e"/><path clip-rule="evenodd" class="yxoqvs3bi"/><path class="qnz-s-hbf"/><path class="c3mtq3vxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cell"} {...others} />);
}

export default Component;
