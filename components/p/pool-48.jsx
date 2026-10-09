import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-eh9wb_p.css';
import '../../css/q/q3uapjb3p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u-eh9wb_p"/><path class="q3uapjb3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pool-48"} {...others} />);
}

export default Component;
