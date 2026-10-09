import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0r96rbpr.css';
import '../../css/l/lssnpc1hw.css';
import '../../css/s/svq-tkbgt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y0r96rbpr"/><path class="lssnpc1hw"/><path class="svq-tkbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biodiversity-20"} {...others} />);
}

export default Component;
