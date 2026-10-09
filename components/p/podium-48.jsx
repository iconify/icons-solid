import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4lrodbjn.css';
import '../../css/y/ykzqhcc_o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l4lrodbjn"/><path class="ykzqhcc_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:podium-48"} {...others} />);
}

export default Component;
