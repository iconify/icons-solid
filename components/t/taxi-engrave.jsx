import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uu-za-tly.css';
import '../../css/t/t1vc-_v9v.css';
import '../../css/d/drswhsb9m.css';
import '../../css/q/q1vr80fzk.css';
import '../../css/g/gsm21sbrt.css';
import '../../css/n/nb-vlvbbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uu-za-tly wm-k"/><path class="t1vc-_v9v wm-a"/><path class="drswhsb9m wm-shadow"/><path class="q1vr80fzk wm-k"/><path class="gsm21sbrt wm-a"/><path class="nb-vlvbbc wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:taxi-engrave"} {...others} />);
}

export default Component;
