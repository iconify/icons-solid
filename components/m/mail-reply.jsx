import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r_elshbet.css';
import '../../css/f/f4dpkfvlx.css';
import '../../css/y/yk8wpcb-k.css';
import '../../css/u/uux6mac8t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r_elshbet"/><path class="f4dpkfvlx"/><path class="yk8wpcb-k"/><path class="uux6mac8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-reply"} {...others} />);
}

export default Component;
