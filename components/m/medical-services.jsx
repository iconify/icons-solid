import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/a/azr-0u.css';
import '../../css/l/li54_l.css';
import '../../css/s/s0k_kc.css';
import '../../css/k/kr24cs.css';
import '../../css/s/so-from-64.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c azr-0u"/><path class="a0m25c li54_l"/><path class="a0m25c s0k_kc"/><path class="a0m25c kr24cs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:medical-services"} {...others} />);
}

export default Component;
