import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu8t0abam.css';
import '../../css/x/xza3bhasw.css';
import '../../css/o/o_31o9eni.css';
import '../../css/q/qkjz_qlzf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vu8t0abam"/><path class="xza3bhasw"/><path class="o_31o9eni"/><path class="qkjz_qlzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:net-metering-48-bold"} {...others} />);
}

export default Component;
