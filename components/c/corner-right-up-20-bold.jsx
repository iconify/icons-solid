import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewh_gkbzz.css';
import '../../css/g/gjv7hdb3x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ewh_gkbzz"/><path class="gjv7hdb3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-right-up-20-bold"} {...others} />);
}

export default Component;
