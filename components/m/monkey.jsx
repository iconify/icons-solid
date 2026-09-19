import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zi0tphd-c.css';
import '../../css/h/h1r_1vbuz.css';
import '../../css/r/rhfe71a6y.css';
import '../../css/e/exh1ppbgt.css';
import '../../css/r/r6xfiyb_d.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zi0tphd-c"/><path class="h1r_1vbuz"/><path class="rhfe71a6y"/><path class="exh1ppbgt"/><path class="r6xfiyb_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:monkey"} {...others} />);
}

export default Component;
