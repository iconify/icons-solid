import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfqul596w.css';
import '../../css/d/drc7d7gig.css';
import '../../css/h/hzem-r0io.css';
import '../../css/x/x5lbktbtf.css';
import '../../css/w/wobm3acef.css';
import '../../css/v/vjbvj13aq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wfqul596w"/><path class="drc7d7gig"/><circle class="hzem-r0io"/><circle class="x5lbktbtf"/><circle class="wobm3acef"/><path class="vjbvj13aq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:prompt-session"} {...others} />);
}

export default Component;
