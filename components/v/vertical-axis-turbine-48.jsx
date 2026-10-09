import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_ca49boy.css';
import '../../css/z/zy7z76-2w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d_ca49boy"/><path class="zy7z76-2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vertical-axis-turbine-48"} {...others} />);
}

export default Component;
