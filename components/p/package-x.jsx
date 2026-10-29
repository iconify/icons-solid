import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m9jr6rorx.css';
import '../../css/e/ejajo6d_s.css';
import '../../css/w/wxw8-xbll.css';
import '../../css/t/ta5f8qr9l.css';
import '../../css/w/w5b3ozbff.css';
import '../../css/l/l0h8vjbzm.css';
import '../../css/j/jqbkvtbyv.css';
import '../../css/v/vkseo0b3x.css';
import '../../css/z/z1zmm6blg.css';
import '../../css/n/n0b3nrbmj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m9jr6rorx wm-k"/><path class="ejajo6d_s wm-k"/><path class="wm-k wxw8-xbll"/><path class="ta5f8qr9l wm-k"/><path class="w5b3ozbff wm-shine"/><path class="l0h8vjbzm wm-k"/><path class="jqbkvtbyv wm-a"/><path class="vkseo0b3x wm-s"/><path class="wm-s z1zmm6blg"/><path class="n0b3nrbmj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:package-x"} {...others} />);
}

export default Component;
