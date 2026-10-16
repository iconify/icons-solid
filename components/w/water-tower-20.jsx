import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i16ny7bvz.css';
import '../../css/e/e3jspeiln.css';
import '../../css/d/duvqrbc-n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i16ny7bvz"/><path class="e3jspeiln"/><path class="duvqrbc-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-tower-20"} {...others} />);
}

export default Component;
