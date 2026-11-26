import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9wvrwatx.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rc7gsrb5j.css';
import '../../css/y/yn7-q2z6z.css';
import '../../css/d/d0-tje_5u.css';
import '../../css/v/v_jklzdel.css';
import '../../css/j/j2gh62b7i.css';
import '../../css/o/oxm7-3jjx.css';
import '../../css/e/ef456lb5n.css';
import '../../css/a/a9a44268m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t9wvrwatx"/><g class="t_2lkqbxb"><path class="rc7gsrb5j"/><path class="yn7-q2z6z"/><path class="d0-tje_5u"/><path class="v_jklzdel"/><path class="j2gh62b7i"/><path class="oxm7-3jjx"/><path class="ef456lb5n"/><path class="a9a44268m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:right-anger-bubble"} {...others} />);
}

export default Component;
