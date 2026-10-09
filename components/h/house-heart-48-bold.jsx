import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfpjugbvy.css';
import '../../css/t/tqb1tpb0w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vfpjugbvy"/><path class="tqb1tpb0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-heart-48-bold"} {...others} />);
}

export default Component;
