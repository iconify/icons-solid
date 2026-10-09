import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilu3h65we.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/v/vox66xuav.css';
import '../../css/g/gdinynbrf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ilu3h65we"/><path class="aqsnv9bnd"/><path class="vox66xuav"/><path class="gdinynbrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bolt-x-20-bold"} {...others} />);
}

export default Component;
