import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hc_i6bbxk.css';
import '../../css/f/fw2t25bwb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hc_i6bbxk"/><path class="fw2t25bwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:landslide-48-bold"} {...others} />);
}

export default Component;
