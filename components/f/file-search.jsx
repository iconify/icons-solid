import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/w/w29oqnb9o.css';
import '../../css/d/dlv5tr91f.css';
import '../../css/z/z7qkl_bam.css';
import '../../css/l/l4pt3u4yo.css';
import '../../css/a/ay9rgkjdt.css';
import '../../css/n/n4c1o5bsm.css';
import '../../css/a/atdkd8rex.css';
import '../../css/x/xxa42ltcr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="w29oqnb9o"/><path class="dlv5tr91f"/><path class="z7qkl_bam"/><path class="l4pt3u4yo"/><path class="ay9rgkjdt"/><path class="n4c1o5bsm"/><path class="atdkd8rex"/><circle transform="rotate(45 33.485 33.485)" class="xxa42ltcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:file-search"} {...others} />);
}

export default Component;
