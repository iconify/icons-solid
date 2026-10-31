import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/csjb2kw5t.css';
import '../../css/b/b2uewjbgf.css';
import '../../css/w/w87ndpehy.css';
import '../../css/v/v-zmc5eid.css';
import '../../css/x/xck8kdj3v.css';
import '../../css/q/ql1ofhbua.css';
import '../../css/a/aou2backg.css';
import '../../css/a/azr-rlbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="csjb2kw5t"/><path class="b2uewjbgf"/><path class="w87ndpehy wm-shine"/><path class="v-zmc5eid wm-k"/><path class="wm-a xck8kdj3v"/><path class="ql1ofhbua"/><path class="aou2backg"/><path class="azr-rlbvj wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chess"} {...others} />);
}

export default Component;
