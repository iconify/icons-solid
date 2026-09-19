import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vclym-vxn.css';
import '../../css/l/ltqb_omfl.css';
import '../../css/k/k-s-5kbts.css';
import '../../css/g/g5h-on07t.css';
import '../../css/v/vj_cr3b8d.css';
import '../../css/e/ewc_ub5sq.css';
import '../../css/a/an4-p1b2z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGr8KJKdcf"><g class="ft5dv1b6b"><rect class="vclym-vxn"/><circle class="ltqb_omfl"/><circle class="k-s-5kbts"/><path class="g5h-on07t"/><circle class="vj_cr3b8d"/><circle class="ewc_ub5sq"/><path class="an4-p1b2z"/></g></mask></defs><path mask="url(#SVGr8KJKdcf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hippo"} {...others} />);
}

export default Component;
