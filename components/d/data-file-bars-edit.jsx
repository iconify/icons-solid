import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ozwc20enb.css';
import '../../css/h/hlqoxv5qe.css';
import '../../css/d/dn9-ywkwu.css';
import '../../css/i/ix6chmrlh.css';
import '../../css/z/zp3remled.css';
import '../../css/c/cg8z4db4w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ozwc20enb"/><path class="hlqoxv5qe"/><path class="dn9-ywkwu"/><path class="ix6chmrlh"/><path class="zp3remled"/><path class="cg8z4db4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:data-file-bars-edit"} {...others} />);
}

export default Component;
