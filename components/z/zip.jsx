import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/zxioyss3z.css';
import '../../css/j/jgkcneb9x.css';
import '../../css/p/pd8e-bc_k.css';
import '../../css/k/krp3398zx.css';
import '../../css/j/jtnjq2ijf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path clip-rule="evenodd" class="zxioyss3z"/><path class="jgkcneb9x"/><path clip-rule="evenodd" class="pd8e-bc_k"/><path class="krp3398zx"/><path class="jtnjq2ijf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:zip"} {...others} />);
}

export default Component;
