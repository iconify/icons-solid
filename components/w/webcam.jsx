import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/f/flvgd28wd.css';
import '../../css/c/cq_wi-b1w.css';
import '../../css/b/bbdvr4btx.css';
import '../../css/r/r8eqg18lg.css';
import '../../css/l/ljz3xqvdr.css';
import '../../css/n/neiujp7uu.css';
import '../../css/e/eovkf-c_w.css';
import '../../css/x/x4i9qo0ei.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="flvgd28wd"/><path class="cq_wi-b1w"/><path class="bbdvr4btx"/><path class="r8eqg18lg"/><path class="ljz3xqvdr"/><path class="neiujp7uu"/><path class="eovkf-c_w"/><path class="x4i9qo0ei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:webcam"} {...others} />);
}

export default Component;
