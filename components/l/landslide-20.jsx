import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abw1tpbib.css';
import '../../css/f/fsolhac6a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="abw1tpbib"/><path class="fsolhac6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:landslide-20"} {...others} />);
}

export default Component;
