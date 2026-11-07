import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubcl_ebpv.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/o/osf9ghbva.css';
import '../../css/w/wid0-bcxr.css';
import '../../css/a/a9nz3ub6w.css';
import '../../css/s/suwot2e_p.css';
import '../../css/y/y9r2iyjgv.css';
import '../../css/b/b95xkdzok.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ubcl_ebpv"/><g class="xtpeb-edw"><path class="osf9ghbva"/><path class="wid0-bcxr"/><path class="a9nz3ub6w"/><path class="suwot2e_p"/><path class="y9r2iyjgv"/><path class="b95xkdzok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-off-bold-duotone"} {...others} />);
}

export default Component;
