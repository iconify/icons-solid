import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xppejxbig.css';
import '../../css/m/m9th0jbjy.css';
import '../../css/a/apwb7hbmf.css';
import '../../css/c/cqzrqkb1i.css';
import '../../css/d/dcd1kpbbp.css';
import '../../css/y/yclfvv6es.css';
import '../../css/u/uqlwnighl.css';
import '../../css/s/ssyb2j7cg.css';
import '../../css/y/ybec2mqob.css';
import '../../css/a/akzulub5e.css';
import '../../css/j/jb5_dnbwa.css';
import '../../css/l/ls_t8l9lq.css';
import '../../css/a/atn8hebhf.css';
import '../../css/z/zomp5ynht.css';
import '../../css/z/zkeqo8_hu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow xppejxbig"/><path class="m9th0jbjy wm-k"/><path class="apwb7hbmf wm-k"/><path class="cqzrqkb1i wm-k"/><path class="dcd1kpbbp wm-k"/><path class="wm-k yclfvv6es"/><path class="uqlwnighl wm-k"/><path class="ssyb2j7cg wm-k"/><path class="wm-shine ybec2mqob"/><path class="akzulub5e wm-a"/><path class="jb5_dnbwa wm-a"/><path class="ls_t8l9lq wm-a"/><path class="atn8hebhf wm-a"/><path class="wm-a zomp5ynht"/><path class="wm-a zkeqo8_hu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:parking"} {...others} />);
}

export default Component;
