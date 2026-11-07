import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0u7hix8w.css';
import '../../css/y/ylj916f_v.css';
import '../../css/v/vbk7ktz_f.css';
import '../../css/m/mok34v4tz.css';
import '../../css/u/ud_7cfbnu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s0u7hix8w"/><path class="ylj916f_v"/><path class="vbk7ktz_f"/><path class="mok34v4tz"/><path class="ud_7cfbnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-3-bold-duotone"} {...others} />);
}

export default Component;
