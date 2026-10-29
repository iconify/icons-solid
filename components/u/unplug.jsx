import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgdruct7c.css';
import '../../css/g/ggscvou1o.css';
import '../../css/v/vhrya6bqz.css';
import '../../css/h/has5p-b5j.css';
import '../../css/g/grqn6ub4u.css';
import '../../css/y/y2twp9bmb.css';
import '../../css/h/hdkxzmblg.css';
import '../../css/n/ntzeswb2j.css';
import '../../css/k/kth3iibmo.css';
import '../../css/d/dcq_obp4k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wgdruct7c wm-shadow"/><path class="ggscvou1o wm-k"/><path class="vhrya6bqz wm-k"/><path class="has5p-b5j wm-k"/><path class="grqn6ub4u wm-k"/><path class="wm-k y2twp9bmb"/><path class="hdkxzmblg wm-shine"/><path class="ntzeswb2j wm-a"/><path class="kth3iibmo wm-a"/><path class="dcq_obp4k wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:unplug"} {...others} />);
}

export default Component;
