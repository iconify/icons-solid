import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u75u46mdv.css';
import '../../css/d/dxrkstvit.css';
import '../../css/d/dys4xy7wf.css';
import '../../css/y/yepvdbcrr.css';
import '../../css/z/z40gd5b4a.css';
import '../../css/g/gbv8j_h3p.css';
import '../../css/x/xek4tcsky.css';
import '../../css/c/c9tezxbjk.css';
import '../../css/y/yifn-mboe.css';
import '../../css/i/ixqah5btn.css';
import '../../css/e/e7l1drb0j.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="u75u46mdv"/><path class="dxrkstvit"/><path class="dys4xy7wf"/><path class="yepvdbcrr"/><path class="z40gd5b4a"/><path class="gbv8j_h3p"/><path class="xek4tcsky"/><circle class="c9tezxbjk"/><circle class="yifn-mboe"/><path class="ixqah5btn"/><path class="e7l1drb0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-cook-medium-light-skin-tone"} {...others} />);
}

export default Component;
