import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lmr58wvxp.css';
import '../../css/w/wux7ics0m.css';
import '../../css/t/tq030ebiu.css';
import '../../css/h/hgs_wxb7a.css';
import '../../css/v/vgv2cjbdg.css';
import '../../css/f/fov-jfmzz.css';
import '../../css/m/ms_pdjb5v.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lmr58wvxp"/><path class="wux7ics0m"/><path class="tq030ebiu"/><path class="hgs_wxb7a"/><path class="vgv2cjbdg"/><path class="fov-jfmzz"/><path class="ms_pdjb5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:persons"} {...others} />);
}

export default Component;
