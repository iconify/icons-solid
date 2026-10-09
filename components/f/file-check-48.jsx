import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dezwopb-j.css';
import '../../css/y/yzrzqb0op.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dezwopb-j"/><path class="yzrzqb0op"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-check-48"} {...others} />);
}

export default Component;
