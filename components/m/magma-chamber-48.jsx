import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5yplhb0m.css';
import '../../css/y/y49f7hyag.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e5yplhb0m"/><path class="y49f7hyag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:magma-chamber-48"} {...others} />);
}

export default Component;
