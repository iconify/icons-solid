import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjzgf8n8h.css';
import '../../css/b/byt7nmbnt.css';
import '../../css/d/d4_ei1b8v.css';
import '../../css/z/zq2p5ccmf.css';
import '../../css/l/lumf_rb6e.css';
import '../../css/d/dlb0mbb_l.css';
import '../../css/b/bmwugacqa.css';
import '../../css/k/kyld35b4n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tjzgf8n8h"/><path class="byt7nmbnt"/><path class="d4_ei1b8v"/><path class="zq2p5ccmf"/><path class="lumf_rb6e"/><path class="dlb0mbb_l"/><path class="bmwugacqa"/><path class="kyld35b4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:circle-dashed-bold"} {...others} />);
}

export default Component;
