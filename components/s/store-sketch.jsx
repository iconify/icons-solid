import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c2tz-blvo.css';
import '../../css/d/diqnbfn6e.css';
import '../../css/s/sl8671byq.css';
import '../../css/o/o5_y4ibrg.css';
import '../../css/w/wffb95w3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="c2tz-blvo"/><path class="diqnbfn6e wm-k"/><path class="sl8671byq wm-a"/><path class="o5_y4ibrg wm-k"/><path class="wffb95w3v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:store-sketch"} {...others} />);
}

export default Component;
