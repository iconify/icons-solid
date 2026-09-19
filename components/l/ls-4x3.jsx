import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5vgbcb_s.css';
import '../../css/y/yfdjvu8pd.css';
import '../../css/g/gkucm_bdu.css';
import '../../css/c/c0ltoil8c.css';
import '../../css/o/owlk22_ch.css';
import '../../css/q/qslcqt1xy.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="y5vgbcb_s"/><path class="yfdjvu8pd"/><path class="gkucm_bdu"/><path class="c0ltoil8c"/><path class="owlk22_ch"/><path class="qslcqt1xy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ls-4x3"} {...others} />);
}

export default Component;
