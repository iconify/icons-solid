import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5seiobvq.css';
import '../../css/u/uwrgjpbhp.css';
import '../../css/r/rs71wsbme.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r5seiobvq"/><path class="uwrgjpbhp"/><path class="rs71wsbme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mobile-charger-20"} {...others} />);
}

export default Component;
