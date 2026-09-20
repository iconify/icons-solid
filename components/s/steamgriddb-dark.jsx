import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbqqh1vfg.css';
import '../../css/h/hu-59pbvb.css';
import '../../css/b/bt_2dwbxx.css';
import '../../css/d/dzpo8zb_v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lbqqh1vfg"/><path class="hu-59pbvb"/><path class="bt_2dwbxx"/><path class="dzpo8zb_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:steamgriddb-dark"} {...others} />);
}

export default Component;
