import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/racflo02i.css';
import '../../css/k/k8ldz2z3e.css';
import '../../css/m/mrw80-u1y.css';
import '../../css/q/qnz-s-hbf.css';
import '../../css/c/c3mtq3vxr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXLpHDOKO"><g class="racflo02i"><path class="k8ldz2z3e"/><path clip-rule="evenodd" class="mrw80-u1y"/><path class="qnz-s-hbf"/><path class="c3mtq3vxr"/></g></mask></defs><path mask="url(#SVGXLpHDOKO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:cell"} {...others} />);
}

export default Component;
