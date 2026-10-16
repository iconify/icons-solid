import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4hf1bcaj.css';
import '../../css/b/b6bjo8bom.css';
import '../../css/a/ad_8r9xgg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p4hf1bcaj"/><path class="b6bjo8bom"/><path class="ad_8r9xgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pharmacy-20-bold"} {...others} />);
}

export default Component;
