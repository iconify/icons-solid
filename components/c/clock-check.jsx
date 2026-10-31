import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xuizoyb_v.css';
import '../../css/e/eb2axdblo.css';
import '../../css/l/l8rx5kp1k.css';
import '../../css/f/fuyz5hbco.css';
import '../../css/n/nie1bykur.css';
import '../../css/p/py85i_u-t.css';
import '../../css/a/axtil0fbi.css';
import '../../css/l/l-h6zmwta.css';
import '../../css/a/a_j4t54cg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="xuizoyb_v"/><path class="eb2axdblo"/><path class="l8rx5kp1k wm-shine"/><path class="fuyz5hbco wm-k"/><path class="nie1bykur wm-a"/><path class="py85i_u-t wm-s"/><path class="axtil0fbi"/><path class="l-h6zmwta"/><path class="a_j4t54cg wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:clock-check"} {...others} />);
}

export default Component;
