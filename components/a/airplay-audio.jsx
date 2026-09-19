import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o_8i6hn3s.css';
import '../../css/t/tvd51abuj.css';
import '../../css/x/xesg-7ktv.css';
import '../../css/q/q1mkbcbsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o_8i6hn3s"/><path class="tvd51abuj"/><path class="xesg-7ktv"/><path class="q1mkbcbsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:airplay-audio"} {...others} />);
}

export default Component;
