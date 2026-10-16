import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfnsa8bub.css';
import '../../css/u/u6s26w-eb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rfnsa8bub"/><path class="u6s26w-eb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:aquifer-20-bold"} {...others} />);
}

export default Component;
