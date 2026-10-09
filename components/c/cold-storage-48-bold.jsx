import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-50ztbgo.css';
import '../../css/z/zof54ffpy.css';
import '../../css/i/ibk_3obac.css';
import '../../css/u/us_48ubxv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r-50ztbgo"/><path class="zof54ffpy"/><path class="ibk_3obac"/><path class="us_48ubxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cold-storage-48-bold"} {...others} />);
}

export default Component;
