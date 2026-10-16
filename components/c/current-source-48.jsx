import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw3x_bcqz.css';
import '../../css/f/fyq898vwm.css';
import '../../css/v/vst_-y9mq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lw3x_bcqz"/><path class="fyq898vwm"/><path class="vst_-y9mq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:current-source-48"} {...others} />);
}

export default Component;
