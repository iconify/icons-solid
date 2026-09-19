import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fb3b8eqix.css';
import '../../css/q/q-4rck3df.css';
import '../../css/o/o6ghyybzf.css';
import '../../css/h/hge4jelvt.css';
import '../../css/w/wtrtncbby.css';
import '../../css/m/m_12zmb2f.css';
import '../../css/s/sjizabcen.css';
import '../../css/a/adu89-4bh.css';
import '../../css/j/j6dk5bj_w.css';
import '../../css/z/zb1s1n76d.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="fb3b8eqix"/><rect class="q-4rck3df"/><rect class="o6ghyybzf"/><rect class="hge4jelvt"/><rect class="wtrtncbby"/><rect class="m_12zmb2f"/><rect class="sjizabcen"/><rect class="adu89-4bh"/><rect class="j6dk5bj_w"/><rect class="zb1s1n76d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:keypad-sharp"} {...others} />);
}

export default Component;
