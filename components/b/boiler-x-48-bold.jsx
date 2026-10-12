import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rogv-gcwu.css';
import '../../css/d/dq-bitbup.css';
import '../../css/s/sfb8rqn9v.css';
import '../../css/i/iuv5z4b4l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rogv-gcwu"/><path class="dq-bitbup"/><path class="sfb8rqn9v"/><path class="iuv5z4b4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:boiler-x-48-bold"} {...others} />);
}

export default Component;
