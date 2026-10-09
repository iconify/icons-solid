import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1mcems0k.css';
import '../../css/d/dp_h2wb9o.css';
import '../../css/b/bcklhmbcb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l1mcems0k"/><path class="dp_h2wb9o"/><path class="bcklhmbcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-heat-pump-20-bold"} {...others} />);
}

export default Component;
