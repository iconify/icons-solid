import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhfn3yyhb.css';
import '../../css/o/of8os1b2d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mhfn3yyhb"/><path class="of8os1b2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:owl-20"} {...others} />);
}

export default Component;
