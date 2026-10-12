import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbqw8r0sh.css';
import '../../css/r/r_zfy8bnu.css';
import '../../css/q/qpbeuubxz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wbqw8r0sh"/><path class="r_zfy8bnu"/><path class="qpbeuubxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:split-48"} {...others} />);
}

export default Component;
