import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/csf-0ilxn.css';
import '../../css/s/ss6k_cbrc.css';
import '../../css/a/afknnbadl.css';
import '../../css/q/qb3xhyb1e.css';
import '../../css/z/zll-194qf.css';
import '../../css/o/ocseuacpo.css';
import '../../css/v/vfm9j8plw.css';
import '../../css/t/tofe1q2ea.css';
import '../../css/p/pte6uyhnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="csf-0ilxn"/><path class="ss6k_cbrc"/><path class="afknnbadl"/><path class="qb3xhyb1e"/><path class="zll-194qf"/><path class="ocseuacpo"/><path class="vfm9j8plw"/><path class="tofe1q2ea"/><path class="pte6uyhnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:satellite"} {...others} />);
}

export default Component;
