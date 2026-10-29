import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xq-d-zwam.css';
import '../../css/c/cwqm1g-ge.css';
import '../../css/t/tc04w--sa.css';
import '../../css/v/v1or2-y9n.css';
import '../../css/y/yg_69k93j.css';
import '../../css/r/r4a7x_sct.css';
import '../../css/t/t2dx6ielj.css';
import '../../css/h/hp64fg_jc.css';
import '../../css/f/fso0u-ivo.css';
import '../../css/l/lr7c4pb4z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow xq-d-zwam"/><path class="cwqm1g-ge wm-k"/><path class="tc04w--sa wm-k"/><path class="v1or2-y9n wm-k"/><path class="wm-k yg_69k93j"/><path class="r4a7x_sct wm-k"/><path class="t2dx6ielj wm-shine"/><path class="hp64fg_jc wm-k"/><path class="fso0u-ivo wm-a"/><path class="lr7c4pb4z wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:chef-hat"} {...others} />);
}

export default Component;
