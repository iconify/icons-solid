import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0gbl2bsl.css';
import '../../css/f/fbwi-nbkh.css';
import '../../css/b/bbdhcnz7x.css';
import '../../css/u/uh3ynyutc.css';
import '../../css/u/usn8oac_c.css';
import '../../css/x/x6lyt556w.css';
import '../../css/s/snrz6tb_b.css';
import '../../css/s/sw27utzkb.css';
import '../../css/d/dpkz0rb9t.css';
import '../../css/i/ilty1ubnh.css';

const viewBox = {"width":432.071,"height":445.383};
const content = `<g class="z0gbl2bsl"><path class="fbwi-nbkh"/><path class="bbdhcnz7x"/><path class="uh3ynyutc"/><path class="usn8oac_c"/><path class="x6lyt556w"/><path class="snrz6tb_b"/><path class="sw27utzkb"/><path class="dpkz0rb9t"/><path class="ilty1ubnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:postgresql"} {...others} />);
}

export default Component;
