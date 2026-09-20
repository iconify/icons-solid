import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dlyrpgbor.css';
import '../../css/u/u7_wj4bzn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dlyrpgbor"/><path class="u7_wj4bzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:weigher-bold-duotone"} {...others} />);
}

export default Component;
