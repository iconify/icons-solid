import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzeztmj2w.css';
import '../../css/j/jq2f_o2_s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mzeztmj2w"/><path class="jq2f_o2_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:api-48"} {...others} />);
}

export default Component;
