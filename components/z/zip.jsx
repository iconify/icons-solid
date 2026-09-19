import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/ux_ty0bqk.css';
import '../../css/j/jgkcneb9x.css';
import '../../css/p/pd8e-bc_k.css';
import '../../css/k/krp3398zx.css';
import '../../css/j/jtnjq2ijf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTPkkEbwu"><g class="rohhhzb0l"><path clip-rule="evenodd" class="ux_ty0bqk"/><path class="jgkcneb9x"/><path clip-rule="evenodd" class="pd8e-bc_k"/><path class="krp3398zx"/><path class="jtnjq2ijf"/></g></mask></defs><path mask="url(#SVGTPkkEbwu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:zip"} {...others} />);
}

export default Component;
