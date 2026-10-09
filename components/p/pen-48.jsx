import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo64yvbkk.css';
import '../../css/g/gsxa1w5va.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xo64yvbkk"/><path class="gsxa1w5va"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pen-48"} {...others} />);
}

export default Component;
