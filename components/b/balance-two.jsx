import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/k_r1rzkra.css';
import '../../css/q/qsqtribpm.css';
import '../../css/v/v3hm9-n6v.css';
import '../../css/z/zfyrt1jby.css';
import '../../css/l/l1lryzbkl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="k_r1rzkra"/><path clip-rule="evenodd" class="qsqtribpm"/><path class="v3hm9-n6v"/><path clip-rule="evenodd" class="zfyrt1jby"/><path class="l1lryzbkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:balance-two"} {...others} />);
}

export default Component;
