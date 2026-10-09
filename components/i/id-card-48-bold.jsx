import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/defz0cbcm.css';
import '../../css/p/p4l2bobkl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="defz0cbcm"/><path class="p4l2bobkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:id-card-48-bold"} {...others} />);
}

export default Component;
