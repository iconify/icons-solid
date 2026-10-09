import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnes2-b0p.css';
import '../../css/w/wofyv04is.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hnes2-b0p"/><path class="wofyv04is"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cactus-20"} {...others} />);
}

export default Component;
